import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { SelectDirectory, ListFiles } from '../../wailsjs/go/main/App'

interface FileInfo {
    FullPath: string
    Name: string
    Ext: string
}

export function FileExplorer() {
    const [selectedDir, setSelectedDir] = useState('')
    const [files, setFiles] = useState<FileInfo[]>([])
    const [error, setError] = useState('')

    const handleSelectDirectory = async () => {
        try {
            const dirPath = await SelectDirectory()
            if (dirPath === '') {
                return
            }
            setSelectedDir(dirPath)
            setError('')
            const result = await ListFiles(dirPath)
            setFiles(result)
        } catch (err) {
            setError(String(err))
        }
    }

    return (
        <div className="w-full p-5">
            <div className="flex flex-col justify-center max-w-screen-md mx-auto gap-5">
                <h2 className="text-2xl font-bold">Explorador de Arquivos</h2>
                <Button onClick={handleSelectDirectory}>
                    Selecionar Diretório
                </Button>
                {error && (
                    <p className="text-sm text-red-500">Erro: {error}</p>
                )}
                {selectedDir && !error && (
                    <p className="text-sm text-gray-500">Diretório: {selectedDir}</p>
                )}
                {files.length > 0 && (
                    <table className="w-full border-collapse border">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800">
                                <th className="border p-2 text-left">Caminho Completo</th>
                                <th className="border p-2 text-left">Nome</th>
                                <th className="border p-2 text-left">Extensão</th>
                            </tr>
                        </thead>
                        <tbody>
                            {files.map((file, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}
                                >
                                    <td className="border p-2">{file.FullPath}</td>
                                    <td className="border p-2">{file.Name}</td>
                                    <td className="border p-2">{file.Ext}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}