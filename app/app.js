var chatComponent = Vue.extend({
    template: `
                <div class="panel panel-primary">
                    <div class="panel-heading">Chat</div>
                    <div class="panel-body">
                        <ul class="chat list-unstyled">
                            <li class="clearfix"
                                :class="{left: !isUser(o.email), right: isUser(o.email)}"
                                v-for="o in chat.messages">
                                <span :class="{'pull-left': !isUser(o.email), 'pull-right': isUser(o.email)}">
                                    <img :src="o.photo" class="img-circle">
                                </span>
                                <div class="chat-body">
                                    <strong>
                                        {{ o.name }}
                                    </strong>
                                    <p>
                                        {{ o.text }}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="panel-footer">
                    <div class="input-group">
                        <input type="text" class="form-control input-md" placeholder="Digite sua mensagem">
                        <span class="input-group-btn">
                            <button class="btn btn-success btn-md">Enviar</button>
                        </span>
                    </div>
                </div>
            ` ,
    data: function () {
        return {
            user: {
                email: 'leandro.ribeiro@hbsis.com.br',
                name: 'Leandro Ribeiro'
            },
            chat: {
                messages: [
                    {
                        name: "Fulando",
                        email: "fulano@gmail.com",
                        text: "Olá, tudo bom? ",
                        photo: "http://placehold.it/50/000FFF/fff&text=00"
                    },
                    {
                        email: "leandro.ribeiro@hbsis.com.br",
                        name: "Atendente",
                        text: "Tudo ótimo!",
                        photo: "http://placehold.it/50/FFFFFF/fff&text=EU"
                    },
                    {
                        email: "leandro.ribeiro@hbsis.com.br",
                        name: "Atendente",
                        text: "Tudo ótimo!",
                        photo: "http://placehold.it/50/FFFFFF/fff&text=EU"
                    }
                ]
            }
        };
    },

    methods: {
        isUser: function(email) {
            return this.user.email == email;
        }
    }
});

var roomComponent = Vue.extend({
    template: `
        <div class="col-md-4" > 
            <div class="panel panel-primary">
                <div class="panel-heading">
                    {{ chat.teste.length }}        
                </div>
                <div class="panel-body">
                    teste
                </div>
            </div>
            
        </div>
        
                
            ` ,
    data: function () {
        return {
            user: {
                email: 'leandro.ribeiro@hbsis.com.br',
                name: 'Leandro Ribeiro'
            },
            chat: {
                teste: [
                    {
                        name: "Fulando",
                        email: "fulano@gmail.com",
                        text: "Olá, tudo bom? ",
                        photo: "http://placehold.it/50/000FFF/fff&text=00"
                    },
                    {
                        email: "leandro.ribeiro@hbsis.com.br",
                        name: "Atendente",
                        text: "Tudo ótimo!",
                        photo: "http://placehold.it/50/FFFFFF/fff&text=EU"
                    },
                    {
                        email: "leandro.ribeiro@hbsis.com.br",
                        name: "Atendente",
                        text: "Tudo ótimo!",
                        photo: "http://placehold.it/50/FFFFFF/fff&text=EU"
                    }
                ]
            }
        };
    },

    methods: {
        isUser: function(email) {
            return this.user.email == email;
        }
    }
});

const routes = [
    {
        path: '/chat',
        component: chatComponent
    },
    {
        path: '/rooms',
        component: roomComponent
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount("#app");
