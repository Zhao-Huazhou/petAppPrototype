"""Build and publish only the standalone prototype to the gh-pages branch."""
from pathlib import Path
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parent.parent
DOMAIN = 'petapp.aidenzhao.site'
BRANCH = 'gh-pages'

def run(*args, cwd=ROOT, capture=False):
    return subprocess.run(args, cwd=cwd, check=True, text=True,
                          stdout=subprocess.PIPE if capture else None).stdout

run('python3', 'prototype/build.py')
remote = run('git', 'remote', 'get-url', 'origin', capture=True).strip()
name = run('git', 'config', 'user.name', capture=True).strip()
email = run('git', 'config', 'user.email', capture=True).strip()
exists = run('git', 'ls-remote', '--heads', remote, BRANCH, capture=True).strip()
with tempfile.TemporaryDirectory(prefix='petapp-pages-') as tmp:
    work = Path(tmp)
    if exists:
        run('git', 'clone', '--depth', '1', '--single-branch', '--branch', BRANCH, remote, tmp)
    else:
        run('git', 'init', '-b', BRANCH, cwd=work)
        run('git', 'remote', 'add', 'origin', remote, cwd=work)
    run('git', 'config', 'user.name', name, cwd=work)
    run('git', 'config', 'user.email', email, cwd=work)
    (work / 'index.html').write_bytes((ROOT / 'index.html').read_bytes())
    (work / '.nojekyll').write_text('')
    (work / 'CNAME').write_text(DOMAIN + '\n')
    run('git', 'add', 'index.html', '.nojekyll', 'CNAME', cwd=work)
    changed = subprocess.run(['git', 'diff', '--cached', '--quiet'], cwd=work).returncode
    if changed == 1:
        run('git', 'commit', '-m', 'deploy: update reptile camera prototype', cwd=work)
        run('git', 'push', 'origin', BRANCH, cwd=work)
    elif changed != 0:
        raise RuntimeError('Unable to inspect deployment changes')
    else:
        print('Deployment files already up to date.')
print('Published branch: gh-pages; GitHub Pages will build the site.')
print('URL: https://' + DOMAIN + '/ (requires DNS and HTTPS provisioning)')
