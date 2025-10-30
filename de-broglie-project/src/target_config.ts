const target_tauri = true

export const api_proxy_addr = "http://192.168.1.20:8080"
export const img_proxy_addr = "http://192.168.1.20:9000"
export const dest_api = (target_tauri) ? "/api" : "api"
export const dest_img = (target_tauri) ? img_proxy_addr : "img-proxy"
export const dest_root = (target_tauri) ? "" : "/De_Broglie_Calculation_RIP_2025_frontend"
