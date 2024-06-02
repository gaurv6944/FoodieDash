<h1>Login and Register Controller</h1>
<h2>Register</h2>
<ul>
<li>fething the data from req</li>
<li>validate the email with the help of validator</li>
<li>checking password lengh</li>
<li>hashing the password with the help of brypt library</li>
<li>save the usermodel in DB</li>
<li>send a success res and token</li>
  
</ul>
<h2> Login
</h2>
<ul>
<li>fetch the data from req.body</li>
<li>check the user availibilty in DB with the help of findOne function</li>
<li>if user found , then match the password with help of compare function</li>
<li>if password match , create a token</li>
<li>then send a success res and a token</li>


  
</ul>
<h1>AuthMiddleware</h1>
<ul>
  <li>getting the token from req.headers</li>
  <li>verify the token</li>
    <li>convert token into userId</li>
    <li>append into request</li>
</ul>
<h1>CartController For User</h1>
<h2>AddToCart</h2>
<ul>
  <li>getting the userId sent by auth middleware</li>
  <li>Finding the data from database with help of userId </li>
  <li>if entry related that is created already then increase it otherwise create a entry related to that item</li>
    <li>update the userData with the help of findbyIdAndUpdate</li>
    <li>send success response</li>
</ul>
<h2>RemoveFromCart</h2>
<ul>
  <li>get user data</li>
  <li>get cartdat from userdata</li>
  <li>if entry is present related to that item then decrease it</li>
  <li>update the userModel</li>
  <li>send a success response</li>
</ul>
<h2>GetCart</h2>
<ul>
  <li>get userdata with help of userId from db</li>
   <li>get cart data from userData</li>
   <li>send cart data as respnse</li>
   
</ul>
