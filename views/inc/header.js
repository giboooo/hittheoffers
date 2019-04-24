// nok 123 in the menu


let header = `
<header class="page-header">
    <div class="navbar-fixed">
      <nav class="light blue lighten-4">
        <div class="nav">
          
          <!-- logo -->
          <a href="/index.html" class="brand-logo left">
            <img class="circle sm logo" src="/assets/img/logo.png" alt="logo">
          </a>
          
          <!-- search bar -->
          
          <ul class="right">
            <li>
                <div class="input-field autocomplete">
                  <!-- <input id="search" type="search" class="validate "> -->
                  <!-- <label for="search">Search</label> -->
                </div>
            </li>
            <li>
              <a href="/views/user/search.html">
                <i class="material-icons">search</i> 
              </a>
            </li>

            <!-- shoping cart -->
            <li>
              <a href="#">
                <i class="material-icons">shopping_cart</i>
              </a>
            </li>
                
            <!-- user -->
            <li >
              <div>
                <a href="/views/user/profile.html">
                  <i class="material-icons">person</i>
                </a>
                <div class="nav-content">
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>
                </div>
              </div>
            </li>
            
            <!-- menu -->
            <li>
              <a class="dropdown-trigger" href="#" data-target="menuDrop">
                <i class="material-icons">more_vert</i>
              </a>
            </li>

            <!-- menuDrop -->
            <ul id='menuDrop' class='dropdown-content'>
              <li><a href="#!">one</a></li>
              <li><a href="#!">two</a></li>
              <li class="divider" tabindex="-1"></li>
              <li><a href="#!">three</a></li>
              <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
              <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
            </ul>
          </ul>
      </div>
    </nav>
  </div>
</header>`

document.getElementById('header').innerHTML = header