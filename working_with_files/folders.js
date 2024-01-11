const fs = require("fs")
const path = require("path")

//In this file, comment out all the sections and run just one section at a time to avoid getting errors

// Open a folder
const folderPath = path.join(__dirname, "files")
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.log(err)
        return
    } {
        console.log(files)
    }
})

//Create a folder
const newFolderPath = path.join(__dirname, "new_folder")
fs.mkdir(newFolderPath, (err) => {
    if (err) {
        console.log(err)
        return
    } {
        console.log('File created successfully')
    }
})

// Rename a folder
const renameFolder = path.join(__dirname, "renamed_dir")
fs.rename(newFolderPath, renameFolder, (err) => {
    if (err) {
        console.log(err)
        return
    } {
        console.log("Folder renamed succesfully")
    }
})

// Delete a folder
fs.rmdir(renameFolder, (err) => { 
    if (err) {
        console.log(err)
    return
    } {
        console.log("Folder deleted")
    }
    
})
