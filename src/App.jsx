import './App.css'
import { Welcome } from './components/Welcome'
import { Button } from './components/Button'
import { Hello } from './components/Hello'
// import { UserProfile } from './components/UserProfile'
import { ContactForm } from './components/ContactForm'
import { StyledForm } from './components/StyledForm'
import { CandidateProfile } from './components/CandidateProfile'
import { Product } from './components/Product'
import { Greeting } from './components/Greeting'
import { UserCard } from './components/UserCard'
import { CardWrapper } from './components/CardWrapper'
import { UserDetails } from './components/UserDetails'
import { ProductList } from './components/ProductList'
import { CustomButton } from './components/CustomButton'
import { Contact } from './components/Contact'
import { NewsLetter } from './components/NewsLetter'
import { Menu } from './components/Menu'
import { Counter } from './components/Counter'
import {LoginCard} from "./components/LoginCard";
import {UserDashboard} from "./components/UserDashboard";
import {UserProfile} from "./components/User/UserProfile";
import { ToDoList } from "./components/ToDoList";
import {ShoppingCart} from "./components/ShoppingCart.jsx";

function App() {

  return (

      <div>
          <ShoppingCart />
          {/*<ToDoList />*/}
          {/*<UserDashboard isPremium={true} />
          <UserProfile />
          <UserDashboard isPremium={false} />
          <LoginCard />
          <Counter />*/}
      </div>

      /*<div>

          <Menu />
          <Contact />
          <NewsLetter />

          <CustomButton text={'Hi'} />
          <CustomButton text={'Bye'} />
          <ProductList />

          <UserDetails name="Bruce" isOnline={true} isPremium={true} isNewUser={true} />
          <UserDetails name="Clark" isOnline={false} hideOffline={true} />

          <CardWrapper title="User Profile">
              <p>Batman</p>
              <p>batman@gmail.com</p>
              <button>Edit Profile</button>
          </CardWrapper>

          <UserCard id="165410" name="John" age={30} city="Berlin" email="john@email.com" />

          <Greeting name="Bruce" message="Good Morning" />
          <Greeting name="Clark" />
          <Greeting message="Welcome" />
          <Greeting />

          <Product title="Gaming Laptop" price={1199} inStock={true} categories={['Computer, Electronics, Gaming']} />
          <Welcome name="Bruce" alias="Batman" />
          <Welcome name="Clark" alias="Superman" />
          <Welcome name="Diana" alias="Wonder Woman" />
          <CandidateProfile />
          <StyledForm />
          <ContactForm />
          <UserProfile />
          <Hello />
          <Button />
      </div>*/
  )
}

export default App
