# FreeMind: 
FreeMind é um software criado para programadores autônomos controlarem melhor suas rotinas com múltiplos projetos de diferentes plataformas.

## Tecnologias utilizadas: 
- React.js; 
- CSS.

## Padrões:
- **Nomes de arquivos:** kebab-case;<br>
- **Nomes de funções:** PascalCase;<br>
- **Nomes de variáveis:** camelCase;<br>
- **Nomes de constantes:** UPPERCASE.<br>

## Lógica de login: 
- auth-screen espera uma autorização do authContext
- login-form tenta fazer o login 
- Supabase recebe os dados do login e valida.
- AuthContext verifica se há usuário logado no supabase.
- Se tiver usuário, authContext envia o usuário globalmente
- Ao receber a informação do authContext de que há usuário, auth-screen manda para home
- PrivateRoute intercepta o envio para home e valida.
- Se houver usuário logado, PrivateRoute permite. Senão, ele manda o usuário de volta para login-form