const initState = {
    themeId: 1,
}

export type InitialStateType = typeof initState

export const themeReducer = (state: InitialStateType = initState, action: ChangeThemeIdActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ChangeThemeIdActionType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
