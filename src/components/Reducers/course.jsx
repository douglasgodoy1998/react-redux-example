const initialState = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: 'Iniciando com React',
            lessons: [
                {
                    id: 1,
                    title: 'Primeira aula'
                },
                {
                    id: 2,
                    title: 'Segunda aula'
                }
            ],
        },
        {
            id: 2,
            title: 'Aprendendo Redux',
            lessons: [
                {
                    id: 3, title: 'Terceira Aula',
                },
                {
                    id: 4, title: 'Quarta Aula'
                }
            ]
        }
    ]
}

function course(state = initialState, action) {
    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }
    console.log(action);

    return state;
}
export default course;
