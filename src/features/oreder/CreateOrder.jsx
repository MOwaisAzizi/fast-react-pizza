import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../serveses/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation()
  const isSubmiting = navigation.state === 'submitting'
  const formErrors = useActionData()
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          <p>{formErrors?.phone ? formErrors.phone : null}</p>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        
        <div>
          {/* send the cart value */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <button disabled={isSubmiting}>{`${isSubmiting ? 'Order now' : 'Submiting...'}`}</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}){
  // console.log(request.formData);
  
  const formDate = await request.formData()
  const data = Object.fromEntries(formDate)

  const order = {
    ...data,
    cart:JSON.parse(data.cart),
    priority : data.priority === 'true'
  }

  const errors = {}
  if(!isValidPhone(order.phone))  errors.phone = 'not valid phone'
   if(Object.keys(errors).length > 0) return errors

   //if every thing is OK
  const newOrder = await createOrder(order)
  //cant use usenavigete in methods but outSide
  return redirect(`/order/${newOrder.id}`)
}


export default CreateOrder;
  