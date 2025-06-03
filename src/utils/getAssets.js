/**
 * name:文件名称，例如:home.png
 * subPath:文件路径，例如:home/home.png
 */
export const getAssetsFile = (name, subPath = "") => {
  const basePath = "/src/assets/images/"
  const imagePath = subPath ? `${basePath}${subPath}/` : basePath
  return new URL(`${imagePath}${name}`, import.meta.url).href
}
