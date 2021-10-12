interface IUsuario {
    id: string
    email: string
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'
    // ? transforma o ítem em um dado opcional
}

function redirecione(usuario: IUsuario) {
   if (usuario.cargo) {
       // redirecionar(usuario.cargo)
   }

   // redireciona para a área do usuário.
}