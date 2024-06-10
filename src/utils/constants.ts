interface Messages {
    ERROR: String,
    NOT_FOUND: String,
    SUCCESS: String,
    SERVER_ERROR: String,
    INVALID_QUERY: String
}

const statusMessages: Messages = {
    ERROR: "error",
    NOT_FOUND: " not found",
    SUCCESS: "success",
    SERVER_ERROR: "Internal Server Error",
    INVALID_QUERY: "invalid query"
}

export { statusMessages };