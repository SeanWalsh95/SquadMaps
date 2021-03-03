import os  
import requests
import time

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

WINDOW_SIZE = "1080,800"

class DriverContainer:
    def __init__(self):
        options = Options()

        options.add_argument('--headless')
        options.add_argument('--disable-gpu')
        options.add_argument("--window-size=%s" % WINDOW_SIZE)

        self.driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)

    def screenshot(self, map_id, output):
        self.driver.execute_script('loadLayer("{}")'.format(map_id))
        time.sleep(1)
        self.driver.save_screenshot(output)

if __name__ == '__main__':
    
    resp = requests.get(url='https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/dev/completed_output/_Current%20Version/finished.json')
    layer_list = resp.json()['Maps']

    chrome = DriverContainer()

    html_path = os.path.abspath('../layer.html')
    chrome.driver.get('file:///{}'.format(html_path))
    chrome.driver.maximize_window()

    for layer in layer_list:
        layer_name = layer['rawName'].lower()
        img_path = os.path.abspath('./images/{}.png'.format(layer_name))
        chrome.screenshot(layer_name, img_path)

    chrome.driver.close()