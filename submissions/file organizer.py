import os
import shutil
directory="D:/WEBDEV"
def organize_file_by_extention(directory):
    for filename in os.listdir(directory):
        file_path = os.path.join(directory,filename)
        if os.path.isfile(file_path):
            file_extention = filename.split('.'[-1].lower())
            folder_path = os.path.join(directory,file_extention)
            if not os.path.exists(folder_path):
                os.makedirs(folder_path)
            shutil.move(file_path, os.path.join(folder_path,filename))
organize_file_by_extention(directory)
print(f"Files in '{directory}'have been organized by extention...")
