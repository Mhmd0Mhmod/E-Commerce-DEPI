import FooterSignUpForm from './FooterSignUpForm';
import ListFooter from './ListFooter';

function Footer() {
  return (
    <div className="bg-primary-900 py-12  self-end   sm:block ">
      <div className="max-w-7xl mx-auto flex flex-col  md:grid md:grid-cols-3">
        <ListFooter
          className="order-2"
          title="Company"
          list={[
            { id: 1, value: 'about us' },
            { id: 2, value: 'blog' },
            { id: 3, value: 'order status' },
          ]}
        />
        <ListFooter
          className={`order-3`}
          title="contact"
          list={[
            { id: 1, value: '123 Main Street, Anytown,USA' },
            { id: 2, value: '+1 (555) 123-4567' },
            { id: 3, value: 'TechHeimSupport@gmail.com' },
          ]}
        />
        <FooterSignUpForm />
      </div>
    </div>
  );
}

export default Footer;
