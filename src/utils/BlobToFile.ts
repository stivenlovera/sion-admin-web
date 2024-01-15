
export function BlobToFile(data: any, nombreFile: string) {
    const url = window.URL.createObjectURL(new Blob([data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', nombreFile)
    document.body.appendChild(link)
    link.click();
}