import barcode
from barcode.writer import ImageWriter

# Specify the barcode type and the data to encode
barcode_type = 'code128'
barcode_data = '1234567890'

# Create a barcode object
barcode_class = barcode.get_barcode_class(barcode_type)
barcode_obj = barcode_class(barcode_data, writer=ImageWriter())

# Save the barcode as an image file
output_file = 'barcode.png'
barcode_obj.save(output_file)

print(f"Barcode saved as {output_file}")
