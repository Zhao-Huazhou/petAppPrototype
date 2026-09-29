from pathlib import Path
import base64, json, re
root = Path(__file__).resolve().parent.parent
shell = (root/'prototype/shell.html').read_text()
img = 'data:image/jpeg;base64,' + base64.b64encode((root/'assets/new-camera-live.jpg').read_bytes()).decode()
templates = json.loads((root/'prototype/original-camera.json').read_text())
def embed_asset(match):
    path = root / match.group(1)
    mime = 'image/jpeg' if path.suffix == '.jpg' else 'image/png'
    return 'src="data:' + mime + ';base64,' + base64.b64encode(path.read_bytes()).decode() + '"'
templates = {key: re.sub(r'data-embedded-asset="\./([^"]+)"', embed_asset, value) for key, value in templates.items()}
shell = shell.replace('/* ORIGINAL_CAMERA */', 'window.CAMERA_ORIGINAL = ' + json.dumps(templates, ensure_ascii=False).replace('</', '<\\/') + ';')
html = shell.replace('/* APP_STYLES */', (root/'styles.css').read_text()).replace('/* APP_SCRIPT */', (root/'script.js').read_text()).replace('__CAMERA_IMAGE__', img)
(root/'index.html').write_text(html)
print('Built index.html (offline, embedded assets/styles/script)')
