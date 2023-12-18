<script>
        function loadContent() {
            let users = {"data": [{"name": "Amsharaj","image": "image/profile_1.jpg",
            "username": "@movies", 
            "des": "On the 28 of the octombeghd djcg djhcgsj djcgsifhsi djghsifsio  sdjgshidahdhias dsjasgjhdiashdha",
            "email":"user@bootdey.com",
            "site":"www.bootdey.com", 
            "tags":["#HTML5", "#CSS3", "#Angular JS"]},
            {
            "name": "Ranjithkumar","image": "image/profile_2.jpg",
                "username": "@Ranjith", 
                "des": "Test desr", "email":"user@bootdey.com",
                 "site":"www.bootdey.com",
                  "tags":["#HTML5", "#CSS3", "#Java", "#DSA"]},
                  {"name": "Amsharaj",
                  "image": "image/profile_3.jpg",
                   "username": "@movies", 
                   "des": "On the 28 of the octombeghd djcg djhcgsj djcgsifhsi djghsifsio  sdjgshidahdhias dsjasgjhdiashdha", 
                   "email":"user@bootdey.com",
                    "site":"www.bootdey.com", 
                    "tags":["#HTML5", "#CSS3", "#Angular JS"]},
                    {"name": "Amsharaj",
                    "image": "image/profile_4.png",
                    "username": "@movies",
                     "des": "On the 28 of the octombeghd djcg djhcgsj djcgsifhsi djghsifsio  sdjgshidahdhias dsjasgjhdiashdha", 
                     "email":"user@bootdey.com",
                      "site":"www.bootdey.com", 
                      "tags":["#HTML5", "#CSS3",
                      "#Angular JS"]},
                      {"name": "Amsharaj",
                      "image": "image/profile_5.png", 
                      "username": "@movies",
                       "des": "On the 28 of the octombeghd djcg djhcgsj djcgsifhsi djghsifsio  sdjgshidahdhias dsjasgjhdiashdha", 
                       "email":"user@bootdey.com", "site":"www.bootdey.com",
                        "tags":["#HTML5", "#CSS3", "#Angular JS"]},
                        
                    {"name": "Amsharaj",
                    "image": "image/profile_6.png",
                     "username": "@movies", 
                     "des": "On the 28 of the octombeghd djcg djhcgsj djcgsifhsi djghsifsio  sdjgshidahdhias dsjasgjhdiashdha", 
                     "email":"user@bootdey.com", 
                     "site":"www.bootdey.com",
                      "tags":["#HTML5", "#CSS3", "#Angular JS"]},
                      {"name": "Amsharaj",
                      "image": "image/profile_7.png", 
                      "username": "@movies",
                       "des": "On the 28 of the octombeghd djcg djhcgsj djcgsifhsi djghsifsio  sdjgshidahdhias dsjasgjhdiashdha", 
                       "email":"user@bootdey.com", "site":"www.bootdey.com",
                        "tags":["#HTML5", "#CSS3", "#Angular JS"]},
                       {"name": "Amsharaj",
                       "image": "image/profile_8.png",
                        "username": "@movies",
                        "des": "On the 28 of the octombeghd djcg djhcgsj djcgsifhsi djghsifsio  sdjgshidahdhias dsjasgjhdiashdha", 
                        "email":"user@bootdey.com", "site":"www.bootdey.com", 
                        "tags":["#HTML5", "#CSS3", "#Angular JS"]},
                        {"name": "Amsharaj",
                        "image": "image/profile_1.jpg",
                        "username": "@movies",
                        "des": "On the 28 of the octombeghd djcg djhcgsj djcgsifhsi djghsifsio  sdjgshidahdhias dsjasgjhdiashdha", 
                    "email":"user@bootdey.com", 
                    "site":"www.bootdey.com",
                     "tags":["#HTML5", "#CSS3",
                      "#Angular JS"]},
                      {"name": "Amsharaj",
                      "image": "image/profile_1.jpg",
                      "username": "@movies", 
                      "des": "On the 28 of the octombeghd djcg djhcgsj djcgsifhsi djghsifsio  sdjgshidahdhias dsjasgjhdiashdha",
                       "email":"user@bootdey.com",
                        "site":"www.bootdey.com", 
                    "tags":["#HTML5", "#CSS3", "#Angular JS"]},
                    {"name": "Amsharaj",
                    "image": "image/profile_1.jpg", 
                    "username": "@movies",
                     "des": "On the 28 of the octombeghd djcg djhcgsj djcgsifhsi djghsifsio  sdjgshidahdhias dsjasgjhdiashdha", 
                     "email":"user@bootdey.com", 
                     "site":"www.bootdey.com",
                      "tags":["#HTML5", "#CSS3", "#Angular JS"]}]};

            let htmlContent = "";
            users.data.forEach((user,index) => {
                htmlContent = htmlContent + '<div style="width: 330px;height: 400px;display: inline-block;">';
                htmlContent = htmlContent + '<figure class="user-card">'
                let bordertop = ["user-card-blue","user-card-green","user-card-pink","user-card-black","user-card-yellow","user-card-red","user-card-violet","user-card-orange"]
                let reminder = index % bordertop.length;
                console.log("color :"+reminder)
                htmlContent = htmlContent +<figure class='${ bordertop[reminder]}'>?</figure>;
                htmlContent = htmlContent + '<figcaption>'
                htmlContent = htmlContent + '<img src="'+user.image+'" class="profile">'
                htmlContent = htmlContent + ' <h5>'+user.name+'</h5>';
                htmlContent = htmlContent + <h6>${user.username}</h6>;
                htmlContent = htmlContent + '<p>'+user.des+'</p>';
                htmlContent = htmlContent + '<ul class="contacts">';
                htmlContent = htmlContent + '<li>';
                htmlContent = htmlContent + <a href="#">${user.email}</a>;
                htmlContent = htmlContent + '</li><li>';
                htmlContent = htmlContent + '<a href="#">'+user.site+'</a>';
                htmlContent = htmlContent + '</li></ul>';
                htmlContent = htmlContent + '<div class="clearfix">';
                let tagColors = ["bg-info", "bg-success"]
                user.tags.forEach((tag, i) => {
                    if (i%2 == 0){
                        htmlContent = htmlContent + '<span class="badge badge-pill '+tagColors[0]+'">'+tag+'</span>';
                    }
                    else{
                        htmlContent = htmlContent + '<span class="badge badge-pill '+tagColors[1]+'">'+tag+'</span>';
                    }
                })
                htmlContent = htmlContent + '</div></figcaption></figure></div>';
            });

            console.log(htmlContent);
            document.getElementById("users").innerHTML = htmlContent;
            
        }

    </script>
</head>

<body>
    <div class="container page-container">
        <div class="row gutters" id="users">
           
        </div>
    </div>
    <script>
        loadContent();
    </script>
