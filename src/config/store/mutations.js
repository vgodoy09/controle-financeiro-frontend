//métodos para adicionar partes do cadastro de pessoae validação
export default {
    //adiciona usuário do contexto
    ADD_USER_CONTEXT(state, userContext) {
        state.userContext = userContext;
    },
    //informação se esta logado ou não
    ADD_ISLOGGED(state, isLogged) {
        state.isLogged = isLogged;
    }
};
