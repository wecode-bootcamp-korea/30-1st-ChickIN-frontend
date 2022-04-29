const BASE_URL = 'http://13.125.170.124:8000';
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.search.split('=')[1];

  const CartButtonHandler = () => {
    fetch(`${BASE_URL}/carts/id`, {