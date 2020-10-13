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

    def take_screenshot(self, url, output):
        self.driver.get(url)
        self.driver.maximize_window()
        self.driver.save_screenshot(output)

if __name__ == '__main__':
    
    chrome = DriverContainer()

    resp = requests.get(url='https://raw.githubusercontent.com/Thomas-Smyth/SquadJS/master/core/squad-layers/layers.json')
    layer_list = resp.json() 

    for layer in layer_list:
        url = "file:///{}?map={}".format(os.path.abspath('../layer.html'), layer['layerClassname'])
        path = '../img/screens/{}.png'.format(layer['layerClassname'])
        chrome.take_screenshot(url, path)