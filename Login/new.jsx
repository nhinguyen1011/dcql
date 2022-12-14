export default function CheckHTML() {
	return (
        <body>
        <div id = "wrapper">
          <div id = "header" style="width:25%">
            <nav class = "container">
              <a href="" id="logo">
                <img width="85" height="84" src="/DL/Ellipse.png" class="custom-logo" alt="website"/>
              </a>
              <!-- các icon bên gốc trái -->
              <div class="icon">
                <ul id="menu">
                  <li><img  width="40" height="30" src="/DL/home.png" class="custom-logo" alt="website"/>
                      <a class="active" href="/Infor/desktop.html">User</a>
                  </li>
                  <li>
                      <img width="40" height="30"  src="/DL/info.png" class="custom-logo" alt="website"/>
                          <a href="/Infor/Infor.html">Information</a>
                  </li>
                  <li>
                      <img width="40" height="30" src="/DL/Update.png" class="custom-logo" alt="website"/>
                      <a href="/Infor/hismanage.html">Change Information</a>
                  </li>
                  <li>
                      <img width="40" height="30" src="/DL/shopping.png" class="custom-logo" alt="website"/>
                      <a href="/List/Packet.html">Buy Packet</a>
                    </li>
                  <li>
                      <img  width="40" height="30"src="/DL//money.png" class="custom-logo" alt="website"/>
                      <a href="/Infor/payment.html">Payment</a>
                    </li>
                 
                </ul>
            </div>
            <!-- các icon gốc phải -->
            <div class = "icon-mini">
              <i class="fa fa-bell"></i>&ensp;
              <a class="active" href="/Infor/desktop.html">
                 <i class="fa fa-user" ></i>
              </a>&ensp;
              <a class="active" href="/Infor/Infor.html" id="ima">
                <img width="30" height="20" src="/DL/Ellipse.png" class="new" alt="website"/>
              </a>
            </div>
            </nav>
          </div>
            <h1>Gói các nhu yếu phẩm</h1>
            <div class="wrap">
              <form action="" class="search" method="post">
             <input type="text" class="searchTerm" placeholder="Search.."/>
             <button type="submit" class="searchButton">
               Submit
            </button>
            Lọc theo
            <select name="mua" required="">
              <option value="">Best-seller</option>
              <option value="">New</option>
              <option value="">Trend</option>
            </select>
            Sắp xếp
            <select name="time" required="">
              <option value="">Tăng dần</option>
              <option value="">Giảm dần</option>
            </select>
          </form>
       </div>
            <div >
              <table class = "lab" border = "1" >
                  <tr>
                      <th colspan="2">Tên gói</th>
                      <th>Số lượng mỗi người</th>
                      <th>Số lượng sản phẩm</th>
                  </tr>
                  <tr>
                    <td><a href = "/List/TP.html">
                        <img id="ima" src="/Nhuyeupham/ca.png"/>
                      </a>
                       </td>                   
                      <td>Thực phẩm tươi sống</td>
                      <td>2</td>
                      <td>24</td>
                      
                  </tr>
                  <tr>
                    <td> <a href = "/List/Lt.html">
                        <img id="ima" src="/Nhuyeupham/muoi.png"/>
                      </a>
                       </td>  
                      <td>Lương thực</td>
                      <td>2</td>
                      <td>24</td>
                     
                  </tr>
                  <tr>
                    <td><a href = "/List/Cnp.html">
                        <img id="ima" src="/Nhuyeupham/men.png"/>
                      </a>
                       </td>  
                      <td>Các loại công nghệ phẩm</td>
                      <td>2</td>
                      <td>24</td>
                      
                  </tr>
              </table>
              <button type="button" onclick="location.href='/Infor/shopping.html'" class="button" >Danh sách sản phẩm</button>          
            </div>
           
            </div>

      </body>
	)
}