

interface INavLinks{
    name:string,
    path:string,
    private:boolean,
    isNav:boolean
}

export const NavLinks:INavLinks[]=[
    {
        name:"Inicio",
        path:"/",
        private:false,
        isNav:true 
    },
    {
        name:"contatos",
        path:"#contatos",
        private:false,
        isNav:true 
    },
    {
        name:"depoimentos",
        path:"#depoimentos",
        private:false,
        isNav:true 
    },
    {
        name:"produtos",
        path:"/produtos",
        private:false,
        isNav:true 
    },
    {
        name:"produto Id",
        path:"/produtos/:id",
        private:false,
        isNav:false 
    },
    {
        name:"Entrar",
        path:"/entrar",
        private:false,
        isNav:true 
    },
    {
        name:"Cadastro",
        path:"/cadastro",
        private:false,
        isNav:true 
    }
]