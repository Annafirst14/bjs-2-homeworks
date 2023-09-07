//Задача № 1
//function cachingDecoratorNew(func) {
  
//}

//Задача № 2
//function debounceDecoratorNew(func, delay) {
  
//}
function cachingDecoratorNew(func) {
  const cache = []

  function wrapper(...args) {
    const hash = md5(JSON.stringify(args))
    const cachedItem = cache.find((item) => item.hash === hash)

    if (cachedItem) {
      console.log("Из кэша: " + cachedItem.value)
      return "Из кэша: " + cachedItem.value
    }

    const result = func(...args)
    cache.push({ hash, value: result })

    if (cache.length > 5) {
      cache.shift()
    }

    console.log("Вычисляем: " + result)
    return "Вычисляем: " + result
  }

  return wrapper
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId
  let count = 0
  let allCount = 0

  function wrapper(...args) {
    clearTimeout(timeoutId)

    if (!timeoutId) {
      func(...args)
      count++
    }

    timeoutId = setTimeout(() => {
      func(...args)
      timeoutId = undefined
    }, delay)

    allCount++

    wrapper.count = count
    wrapper.allCount = allCount
  }

  wrapper.count = 0
  wrapper.allCount = 0

  return wrapper
}