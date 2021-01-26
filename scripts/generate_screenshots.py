import os  
import requests

from selenium import webdriver  
from selenium.webdriver.chrome.options import Options

CHROMEDRIVER_PATH = os.path.abspath('./chromedriver_85.exe')
WINDOW_SIZE = "1080,800"

class DriverContainer:
    def __init__(self):
        options = Options()

        options.add_argument('--headless')
        options.add_argument('--disable-gpu')
        options.add_argument("--window-size=%s" % WINDOW_SIZE)

        self.driver = webdriver.Chrome(CHROMEDRIVER_PATH, chrome_options=options)

    def screenshot(self, map_id, output):
        self.driver.execute_script('loadLayer("{}")'.format(map_id))
        self.driver.save_screenshot(output)

if __name__ == '__main__':
    
    resp = requests.get(url='https://raw.githubusercontent.com/Thomas-Smyth/SquadJS/master/core/squad-layers/layers.json')
    layer_list = resp.json() 

    chrome = DriverContainer()

    html_path = os.path.abspath('../layer.html')
    chrome.driver.get('file:///{}'.format(html_path))
    chrome.driver.maximize_window()

    for layer in layer_list:
        layer_name = layer['classname']
        img_path = os.path.abspath('../img/screens/{}.png'.format(layer_name))
        chrome.screenshot(layer_name, img_path)

    chrome.driver.close()