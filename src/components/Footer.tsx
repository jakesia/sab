import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 text-white py-12 border-t border-dark-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">LUXE</h3>
            <p className="text-dark-100 text-sm">
              Premium lifestyle products for the bold and distinctive. Uncompromising quality, revolutionary design.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">New Arrivals</a></li>
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">Bestsellers</a></li>
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">Collections</a></li>
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">Sustainability</a></li>
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">Press</a></li>
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">Contact Us</a></li>
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">Shipping & Returns</a></li>
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">FAQs</a></li>
              <li><a href="#" className="text-dark-100 hover:text-white text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-200 text-sm">© 2025 LUXE. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-dark-200 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-dark-200 hover:text-white transition-colors">
              <span className="sr-only">X</span>
              <svg className="h-6 w-5" fill="currentColor" viewBox="0 0 300 300.251" aria-hidden="true">
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
              </svg>
            </a>
            <a href="#" className="text-dark-200 hover:text-white transition-colors">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;