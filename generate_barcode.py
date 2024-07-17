import barcode
from barcode.writer import ImageWriter

number = '123456789'
barcode_format = barcode.get_barcode_class('upc')
my_barcode = barcode_format(number, writer=ImageWriter())
my_barcode.save('generated_barcode')

from PIL import Image
Image.open('generated_barcode.png')