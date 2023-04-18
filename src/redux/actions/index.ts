export const saveNotification = (notification: Record<string, string>) => {
    return {
        type: "save_notification",
        payload: notification
    }
}

export const isLogedIn = (value: boolean) => {
    console.log("calling isLoggedIn", value)
    return {
        type: "loggin",
        payload: value
    }
} 