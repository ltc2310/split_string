export const types = {
    ADD_COMMENT : 'ADD_COMMENT'
}

export const actions = {

    addComment : ( comment ) => {
        return { type : types.ADD_COMMENT , comment }
    }
}