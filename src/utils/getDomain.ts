export const getDomainFromUrl = (url: string) => {
    try {
      const { hostname } = new URL(url)
      return hostname.replace("www.", "")
    } catch {
      return ""
    }
  }
  