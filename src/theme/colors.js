export default (dark_mode) => {
    return { 
      color : dark_mode ? "whiteAlpha.900" : "gray.800",
      bg : dark_mode ? "gray.800" : "whiteAlpha.900"
    }
}
