// 预加载所有图片资源
const images = import.meta.glob("/src/assets/images/**/*", {
  eager: true,
  query: "?url",
  import: "default",
})

// 创建缓存映射，提高查找性能
const imageCache = new Map()

// 初始化缓存
Object.keys(images).forEach((path) => {
  const normalizedPath = path.replace("/src/assets/images/", "")
  imageCache.set(normalizedPath, images[path])
})

export const getAssetsFile = (name, subPath = "") => {
  const fullPath = subPath ? `${subPath}/${name}` : name

  // 从缓存中查找
  return imageCache.get(fullPath) || ""
}

// 导出所有可用的图片路径（用于调试）
export const getAvailableImages = () => {
  return Array.from(imageCache.keys())
}
