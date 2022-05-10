type RenameMeStateType = {}
type DoNothingActionType = ReturnType<typeof doNothing>
type RenameMeReducerActionsType = DoNothingActionType

const initState: RenameMeStateType = {}

export const renameMeReducer = (state: RenameMeStateType = initState,
                                action: RenameMeReducerActionsType): RenameMeStateType => {
    switch (action.type) {
        case "DO-NOTHING": {
            return {...state}
        }
        default:
            return state
    }
}

const doNothing = () => ({
        type: 'DO-NOTHING'
    } as const
)