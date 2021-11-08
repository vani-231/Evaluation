function navbar(){
    return ` <nav class= "bg-indigo-700 shadow-lg">
    <div class="container mx-auto">
        <div class="sm:flex justify-center">
            <a href="#" class="text-white text-3xl font-bold px-20 p-3 ">Food Delivery System</a>
            <ul class="text-gray-400 sm:self-center text-xl border-t sm:border-none">
              <li class="sm:inline-block">
                 <a href="#" class="p-7   text-white ">Menu</a>
                </li>
               <li class="sm:inline-block">
                   <a href="signup.html" class="p-7  text-white ">Signup</a>
                </li>
                <li class="sm:inline-block">
                   <a href="login.html" class="p-7  text-white ">Login</a>
                </li>
             </ul>
        </div>
    </div>
    </nav>`
 }
 
 export default navbar