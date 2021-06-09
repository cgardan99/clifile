import React, { useState } from 'react';
import FileBrowser, {Icons} from 'react-keyed-file-browser';

function FileBrowserExample(props) {
    const [filelist, setFileList] = useState([
            {
                key: 'photos/animals/cat in a hat.png',
                modified: new Date(),
                size: 1.5 * 1024 * 1024,
            },
            {
                key: 'photos/animals/kitten_ball.png',
                modified: new Date(),
                size: 545 * 1024,
            },
            {
                key: 'photos/animals/elephants.png',
                modified: new Date(),
                size: 52 * 1024,
            },
            {
                key: 'photos/funny fall.gif',
                modified: new Date(),
                size: 13.2 * 1024 * 1024,
            },
            {
                key: 'photos/holiday.jpg',
                modified: new Date(),
                size: 85 * 1024,
            },
            {
                key: 'documents/letter chunks.doc',
                modified: new Date(),
                size: 480 * 1024,
            },
            {
                key: 'documents/export.pdf',
                modified: new Date(),
                size: 4.2 * 1024 * 1024,
            },
        ]
    )
    
    const handleCreateFolder = (key) => {
        setFileList(
                filelist.concat([{
                    key: key,
                }]
            )
        )
    }
    const handleCreateFiles = (files, prefix) => {
        const newFiles = files.map((file) => {
            let newKey = prefix
            if (prefix !== '' && prefix.substring(prefix.length - 1, prefix.length) !== '/') {
                newKey += '/'
            }
            newKey += file.name
            return {
                key: newKey,
                size: file.size,
                modified: new Date(),
            }
        })

        const uniqueNewFiles = []
        newFiles.each((newFile) => {
            let exists = false
            filelist.each((existingFile) => {
                if (existingFile.key === newFile.key) {
                    exists = true
                }
            })
            if (!exists) {
                uniqueNewFiles.push(newFile)
            }
        })
        setFileList(filelist.concat(uniqueNewFiles))
    }
    const handleRenameFolder = (oldKey, newKey) => {
        var files = filelist;
        const newFiles = []
            files.each((file) => {
            if (file.key.substr(0, oldKey.length) === oldKey) {
                    newFiles.push({
                    ...file,
                    key: file.key.replace(oldKey, newKey),
                    modified: new Date(),
                })
            } else {
                newFiles.push(file)
            }
        })
        setFileList(newFiles);
    }

    const handleRenameFile = (oldKey, newKey) => {
        const newFiles = []
        var files = filelist;
        files.each((file) => {
            if (file.key === oldKey) {
                newFiles.push({
                ...file,
                key: newKey,
                modified: new Date()
                })
            } else {
                newFiles.push(file)
            }
        })
        setFileList(newFiles);
    }
    const handleDeleteFolder = (folderKey) => {
        var files = filelist;
        const newFiles = []
        files.each((file) => {
            if (file.key.substr(0, folderKey.length) !== folderKey) {
                newFiles.push(file)
            }
        });
        setFileList(newFiles);
    }
    const handleDeleteFile = (fileKey) => {
        var files = filelist;
        const newFiles = []
        files.each((file) => {
            if (file.key !== fileKey) {
                newFiles.push(file)
            }
        })
        setFileList(newFiles);
    }
    
    return (
        <FileBrowser
        files={filelist}
        icons={Icons.FontAwesome(4)}

        onCreateFolder={handleCreateFolder}
        onCreateFiles={handleCreateFiles}
        onMoveFolder={handleRenameFolder}
        onMoveFile={handleRenameFile}
        onRenameFolder={handleRenameFolder}
        onRenameFile={handleRenameFile}
        onDeleteFolder={handleDeleteFolder}
        onDeleteFile={handleDeleteFile}
        />
    )
}

export default FileBrowserExample;