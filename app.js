// Default seed menu items used in local demo mode or as fallback
const DEFAULT_MENU = [
  {
    id: 1,
    name: 'ช่อม่วงเสวย',
    description: 'แป้งนุ่มสอดไส้ไก่ผัดเครื่องเทศโบราณ ปั้นเป็นรูปดอกไม้สีม่วงอ่อนทานคู่กับผักชีและพริกขี้หนูสวน',
    price: 150.00,
    category: 'appetizer',
    image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 2,
    name: 'ทอดมันกุ้งลายเสือ',
    description: 'กุ้งสับเนื้อเด้งชุบเกล็ดขนมปังทอดจนเหลืองกรอบ เสิร์ฟพร้อมน้ำจิ้มบ๊วยเจี่ยรสหวานอมเปรี้ยว',
    price: 180.00,
    category: 'appetizer',
    image_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 3,
    name: 'ปอเปี๊ยะทอดคุณยาย',
    description: 'ปอเปี๊ยะทอดไส้วุ้นเส้น หมูสับ และเห็ดหูหนู ปรุงรสกลมกล่อม ทอดกรอบไม่อมน้ำมัน',
    price: 120.00,
    category: 'appetizer',
    image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 4,
    name: 'ผัดไทยกุ้งแม่น้ำย่าง',
    description: 'เส้นจันท์เหนียวนุ่มผัดซอสมะขามสูตรพิเศษ เสิร์ฟพร้อมกุ้งแม่น้ำเผาตัวโตเนื้อหวานมันเยิ้ม',
    price: 320.00,
    category: 'main',
    image_url: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 5,
    name: 'แกงเขียวหวานเนื้อริบอาย',
    description: 'เนื้อริบอายออสเตรเลียเคี่ยวในพริกแกงเขียวหวานเข้มข้น หอมกะทิสดและโหระพา',
    price: 380.00,
    category: 'main',
    image_url: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 6,
    name: 'ข้าวซอยไก่ยอดดอย',
    description: 'เส้นบะหมี่แบนในน้ำแกงข้าวซอยรสเข้มข้น หอมเครื่องแกงภาคเหนือ โรยหน้าด้วยหมี่กรอบและหอมแดง',
    price: 220.00,
    category: 'main',
    image_url: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 7,
    name: 'ต้มยำกุ้งแม่น้ำมะพร้าวอ่อน',
    description: 'ต้มยำน้ำข้นรสจัดจ้าน ใส่กุ้งแม่น้ำสดๆ และเนื้อมะพร้าวอ่อนเคี้ยวเพลิน หอมเครื่องสมุนไพรสด',
    price: 350.00,
    category: 'main',
    image_url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 8,
    name: 'ข้าวเหนียวมะม่วงอกร่อง',
    description: 'ข้าวเหนียวมูนกะทิสดใบเตย หอมหวาน เมล็ดเรียงสวย ทานคู่กับมะม่วงอกร่องหวานหอมและน้ำราดกะทิ',
    price: 180.00,
    category: 'dessert',
    image_url: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 9,
    name: 'บัวลอยเผือกมะพร้าวอ่อน',
    description: 'บัวลอยแป้งเผือกเหนียวนุ่มในน้ำกะทิสดอุ่นๆ รสหวานมันกำลังดี โรยเนื้อมะพร้าวอ่อนขูดเส้น',
    price: 120.00,
    category: 'dessert',
    image_url: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 10,
    name: 'ไอศกรีมกะทิสดกานดา',
    description: 'ไอศกรีมกะทิสดทำเองรสเข้มข้น เสิร์ฟพร้อมลูกชิด ถั่วลิสงคั่วหอม และมะพร้าวอ่อน',
    price: 95.00,
    category: 'dessert',
    image_url: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 11,
    name: 'ชาไทยเย็นสูตรโบราณ',
    description: 'ชาไทยคัดพิเศษ ต้มสด ดึงรสชาติเข้มข้น ผสมนมข้นและนมสดรสกลมกล่อมสไตล์ไทยแท้',
    price: 85.00,
    category: 'drink',
    image_url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 12,
    name: 'อัญชันมะนาวน้ำผึ้งป่า',
    description: 'น้ำสมุนไพรอัญชันออร์แกนิก เพิ่มความสดชื่นด้วยมะนาวแท้และน้ำผึ้งป่าเดือนห้า รสเปรี้ยวหวานลงตัว',
    price: 90.00,
    category: 'drink',
    image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: 13,
    name: 'น้ำมะพร้าวเผาสดชาช่า',
    description: 'มะพร้าวเผาสดคัดเกรดพิเศษ หวานธรรมชาติจากสวน อุดมไปด้วยแร่ธาตุและความสดชื่น',
    price: 110.00,
    category: 'drink',
    image_url: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&auto=format&fit=crop&q=80',
    available: true
  }
];

class KankaewApp {
  constructor() {
    this.menu = [];
    this.cart = [];
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.supabaseClient = null;
    this.dbMode = 'demo'; // 'demo' or 'supabase'
    
    // Config
    this.supabaseUrl = '';
    this.supabaseKey = '';
    this.promptPayNumber = '0812345678'; // Default mock PromptPay number

    this.init();
  }

  async init() {
    this.loadConfig();
    this.setupEventListeners();
    await this.initDatabaseConnection();
    await this.fetchMenu();
    this.renderMenu();
    this.updateCartUI();
  }

  loadConfig() {
    const savedUrl = localStorage.getItem('supabase_url');
    const savedKey = localStorage.getItem('supabase_key');
    const savedPromptpay = localStorage.getItem('promptpay_number');
    const savedCart = localStorage.getItem('kankaew_cart');

    if (savedUrl && savedKey) {
      this.supabaseUrl = savedUrl;
      this.supabaseKey = savedKey;
      this.dbMode = 'supabase';
      document.getElementById('db-status-badge').innerHTML = '<span style="color: var(--success); font-weight: 600;">● Supabase Connected</span>';
    } else {
      this.dbMode = 'demo';
      document.getElementById('db-status-badge').innerHTML = '<span style="color: var(--accent); font-weight: 600;">● Demo Mode (Local DB)</span>';
    }

    if (savedPromptpay) {
      this.promptPayNumber = savedPromptpay;
    }

    if (savedCart) {
      try {
        this.cart = JSON.parse(savedCart);
      } catch (e) {
        this.cart = [];
      }
    }
  }

  saveConfig(url, key, promptpay) {
    if (url && key) {
      localStorage.setItem('supabase_url', url);
      localStorage.setItem('supabase_key', key);
      this.supabaseUrl = url;
      this.supabaseKey = key;
      this.dbMode = 'supabase';
    } else {
      localStorage.removeItem('supabase_url');
      localStorage.removeItem('supabase_key');
      this.supabaseUrl = '';
      this.supabaseKey = '';
      this.dbMode = 'demo';
    }

    localStorage.setItem('promptpay_number', promptpay || '0812345678');
    this.promptPayNumber = promptpay || '0812345678';
    
    this.loadConfig();
    this.initDatabaseConnection().then(() => {
      this.fetchMenu().then(() => {
        this.renderMenu();
        this.closeModal('settings-modal');
      });
    });
  }

  async initDatabaseConnection() {
    if (this.dbMode === 'supabase' && this.supabaseUrl && this.supabaseKey) {
      try {
        // Ensure Supabase JS library is loaded (loaded via CDN index.html)
        if (window.supabase) {
          this.supabaseClient = window.supabase.createClient(this.supabaseUrl, this.supabaseKey);
        } else {
          console.error('Supabase SDK not loaded on window');
          this.dbMode = 'demo';
        }
      } catch (err) {
        console.error('Failed to initialize Supabase client:', err);
        this.dbMode = 'demo';
      }
    }
  }

  async fetchMenu() {
    if (this.dbMode === 'supabase' && this.supabaseClient) {
      try {
        const { data, error } = await this.supabaseClient
          .from('menu_items')
          .select('*')
          .order('id');
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          this.menu = data;
        } else {
          // If connection works but tables are empty, use default menu
          console.warn('Supabase menu_items table empty. Seeding defaults locally.');
          this.menu = DEFAULT_MENU;
        }
      } catch (err) {
        console.error('Supabase fetch menu error, falling back to local menu:', err);
        this.menu = DEFAULT_MENU;
        // Visual indicator that fetch failed
        alert('ไม่สามารถเชื่อมต่อฐานข้อมูล Supabase ได้สำเร็จ ระบบได้ปรับเข้าสู่ Demo Mode อัตโนมัติ (กรุณาตรวจสอบโครงสร้างตารางหรือสิทธิ์การเข้าถึง RLS)');
        this.dbMode = 'demo';
        document.getElementById('db-status-badge').innerHTML = '<span style="color: var(--danger); font-weight: 600;">● Connection Failed (Demo Mode)</span>';
      }
    } else {
      this.menu = DEFAULT_MENU;
    }
  }

  setupEventListeners() {
    // Category Tabs switching
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeCategory = tab.dataset.category;
        this.renderMenu();
      });
    });

    // Search bar input filter
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderMenu();
      });
    }

    // Floating Cart Trigger
    const floatingCart = document.getElementById('floating-cart-trigger');
    if (floatingCart) {
      floatingCart.addEventListener('click', () => {
        this.openModal('cart-modal');
        this.renderCartList();
      });
    }

    // Open Settings Modal
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => {
        document.getElementById('input-url').value = this.supabaseUrl;
        document.getElementById('input-key').value = this.supabaseKey;
        document.getElementById('input-promptpay').value = this.promptPayNumber;
        this.openModal('settings-modal');
      });
    }

    // Settings Form Submission
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
      settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const url = document.getElementById('input-url').value.trim();
        const key = document.getElementById('input-key').value.trim();
        const promptpay = document.getElementById('input-promptpay').value.trim();
        this.saveConfig(url, key, promptpay);
      });
    }

    // Close Modals
    const closeButtons = document.querySelectorAll('.btn-close');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-overlay');
        if (modal) this.closeModal(modal.id);
      });
    });

    // Click outside modal container to close
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          this.closeModal(overlay.id);
        }
      });
    });

    // Checkout Payment Option selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        paymentOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        
        // Show PromptPay warning if selected
        const warning = document.getElementById('payment-qr-warning');
        if (opt.dataset.value === 'qr_code') {
          warning.style.display = 'block';
        } else {
          warning.style.display = 'none';
        }
      });
    });

    // Order form submit
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCheckout();
      });
    }

    // Print Receipt button
    const printBtn = document.getElementById('print-receipt-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Close Receipt button
    const closeReceiptBtn = document.getElementById('close-receipt-btn');
    if (closeReceiptBtn) {
      closeReceiptBtn.addEventListener('click', () => {
        this.closeModal('receipt-modal');
      });
    }
  }

  // Modals Actions
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Render Menu Grid
  renderMenu() {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;

    grid.innerHTML = '';

    // Filter logic
    const filtered = this.menu.filter(item => {
      const matchCategory = this.activeCategory === 'all' || item.category === this.activeCategory;
      const matchSearch = item.name.toLowerCase().includes(this.searchQuery) || 
                          (item.description && item.description.toLowerCase().includes(this.searchQuery));
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--text-secondary);">
          <svg style="width: 48px; height: 48px; color: var(--text-light); margin-bottom: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <p>ไม่พบรายการอาหารที่คุณค้นหา</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      
      const categoryLabel = this.getCategoryThai(item.category);

      card.innerHTML = `
        <div class="card-img-container">
          <img src="${item.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600'}" alt="${item.name}" loading="lazy">
          <span class="card-badge">${categoryLabel}</span>
        </div>
        <div class="card-content">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.description || ''}</p>
          <div class="card-footer">
            <span class="card-price">฿${parseFloat(item.price).toFixed(2)}</span>
            <button class="btn-add" data-id="${item.id}">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
              สั่งอาหาร
            </button>
          </div>
        </div>
      `;

      // Event listener for add button
      card.querySelector('.btn-add').addEventListener('click', () => {
        this.addToCart(item.id);
      });

      grid.appendChild(card);
    });
  }

  getCategoryThai(cat) {
    switch (cat) {
      case 'appetizer': return 'ของว่าง';
      case 'main': return 'จานหลัก';
      case 'dessert': return 'ของหวาน';
      case 'drink': return 'เครื่องดื่ม';
      default: return cat;
    }
  }

  // Cart Operations
  addToCart(itemId) {
    const item = this.menu.find(m => m.id === itemId || String(m.id) === String(itemId));
    if (!item) return;

    const cartItem = this.cart.find(c => String(c.item.id) === String(item.id));

    if (cartItem) {
      cartItem.qty += 1;
    } else {
      this.cart.push({
        item: item,
        qty: 1,
        notes: ''
      });
    }

    this.saveCart();
    this.updateCartUI();
    this.animateFloatingCart();
  }

  updateCartQty(itemId, change) {
    const cartItemIndex = this.cart.findIndex(c => String(c.item.id) === String(itemId));
    if (cartItemIndex === -1) return;

    this.cart[cartItemIndex].qty += change;

    if (this.cart[cartItemIndex].qty <= 0) {
      this.cart.splice(cartItemIndex, 1);
    }

    this.saveCart();
    this.updateCartUI();
    this.renderCartList();
  }

  updateCartNotes(itemId, notes) {
    const cartItem = this.cart.find(c => String(c.item.id) === String(itemId));
    if (cartItem) {
      cartItem.notes = notes;
      this.saveCart();
    }
  }

  removeFromCart(itemId) {
    this.cart = this.cart.filter(c => String(c.item.id) !== String(itemId));
    this.saveCart();
    this.updateCartUI();
    this.renderCartList();
  }

  saveCart() {
    localStorage.setItem('kankaew_cart', JSON.stringify(this.cart));
  }

  getCartCount() {
    return this.cart.reduce((total, c) => total + c.qty, 0);
  }

  getCartTotals() {
    const subtotal = this.cart.reduce((total, c) => total + (c.item.price * c.qty), 0);
    const serviceCharge = subtotal * 0.10; // 10% Service Charge
    const vat = (subtotal + serviceCharge) * 0.07; // 7% VAT
    const grandTotal = subtotal + serviceCharge + vat;

    return {
      subtotal,
      serviceCharge,
      vat,
      grandTotal
    };
  }

  updateCartUI() {
    const count = this.getCartCount();
    const totals = this.getCartTotals();
    
    // Update floating cart trigger state
    const floatingCart = document.getElementById('floating-cart-trigger');
    const badgeCount = document.getElementById('floating-cart-count');
    const totalAmountText = document.getElementById('floating-cart-amount');

    if (count > 0) {
      floatingCart.classList.add('visible');
      badgeCount.textContent = count;
      totalAmountText.textContent = `฿${totals.grandTotal.toFixed(2)}`;
    } else {
      floatingCart.classList.remove('visible');
    }
  }

  animateFloatingCart() {
    const floatingCart = document.getElementById('floating-cart-trigger');
    floatingCart.style.transform = 'scale(1.15) translateY(-4px)';
    setTimeout(() => {
      floatingCart.style.transform = '';
    }, 150);
  }

  renderCartList() {
    const list = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const serviceEl = document.getElementById('cart-service');
    const vatEl = document.getElementById('cart-vat');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('cart-checkout-btn');

    if (!list) return;

    list.innerHTML = '';

    if (this.cart.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 40px 0; color: var(--text-secondary);">
          <svg style="width: 48px; height: 48px; color: var(--text-light); margin-bottom: 12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <p>ไม่มีสินค้าในรถเข็น</p>
        </div>
      `;
      subtotalEl.textContent = '฿0.00';
      serviceEl.textContent = '฿0.00';
      vatEl.textContent = '฿0.00';
      totalEl.textContent = '฿0.00';
      checkoutBtn.disabled = true;
      checkoutBtn.style.opacity = 0.5;
      checkoutBtn.style.cursor = 'not-allowed';
      return;
    }

    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = 1;
    checkoutBtn.style.cursor = 'pointer';

    this.cart.forEach(c => {
      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      
      const totalPrice = (c.item.price * c.qty).toFixed(2);

      itemEl.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${c.item.name}</div>
          <div class="cart-item-price">฿${parseFloat(c.item.price).toFixed(2)} / จาน</div>
          <input type="text" class="cart-item-notes-input" placeholder="คำแนะนำพิเศษ (เช่น เผ็ดน้อย, ไม่ใส่ผัก)" value="${c.notes}" style="margin-top: 8px; font-size: 12px; padding: 6px 10px; border: 1px solid var(--border-color); border-radius: 4px; width: 100%; outline: none;" data-id="${c.item.id}">
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn btn-minus" data-id="${c.item.id}">-</button>
          <span class="cart-item-qty">${c.qty}</span>
          <button class="qty-btn btn-plus" data-id="${c.item.id}">+</button>
          <button class="btn-remove" data-id="${c.item.id}">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      `;

      // Handlers
      itemEl.querySelector('.btn-plus').addEventListener('click', () => this.updateCartQty(c.item.id, 1));
      itemEl.querySelector('.btn-minus').addEventListener('click', () => this.updateCartQty(c.item.id, -1));
      itemEl.querySelector('.btn-remove').addEventListener('click', () => this.removeFromCart(c.item.id));
      
      const notesInput = itemEl.querySelector('.cart-item-notes-input');
      notesInput.addEventListener('change', (e) => this.updateCartNotes(c.item.id, e.target.value));

      list.appendChild(itemEl);
    });

    const totals = this.getCartTotals();
    subtotalEl.textContent = `฿${totals.subtotal.toFixed(2)}`;
    serviceEl.textContent = `฿${totals.serviceCharge.toFixed(2)}`;
    vatEl.textContent = `฿${totals.vat.toFixed(2)}`;
    totalEl.textContent = `฿${totals.grandTotal.toFixed(2)}`;
  }

  async handleCheckout() {
    const customerName = document.getElementById('customer-name').value.trim();
    const tableNumber = document.getElementById('table-number').value.trim();
    const phone = document.getElementById('phone-number').value.trim();
    const orderNotes = document.getElementById('order-notes').value.trim();
    
    let paymentMethod = 'cash';
    const activePaymentOpt = document.querySelector('.payment-option.active');
    if (activePaymentOpt) {
      paymentMethod = activePaymentOpt.dataset.value;
    }

    if (!customerName) {
      alert('กรุณากรอกชื่อลูกค้า');
      return;
    }

    const totals = this.getCartTotals();
    const currentCart = [...this.cart]; // copy cart
    let finalOrderId = null;
    let orderDate = new Date();

    const submitBtn = document.querySelector('#checkout-form button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'กำลังประมวลผลคำสั่งซื้อ...';

    try {
      if (this.dbMode === 'supabase' && this.supabaseClient) {
        // Insert order summary
        const { data: orderData, error: orderError } = await this.supabaseClient
          .from('orders')
          .insert([{
            customer_name: customerName,
            table_number: tableNumber || null,
            phone: phone || null,
            notes: orderNotes || null,
            payment_method: paymentMethod,
            subtotal: totals.subtotal,
            service_charge: totals.serviceCharge,
            vat: totals.vat,
            total_amount: totals.grandTotal,
            status: 'pending'
          }])
          .select();

        if (orderError) throw orderError;
        
        if (orderData && orderData.length > 0) {
          finalOrderId = orderData[0].id;
          orderDate = new Date(orderData[0].created_at);
          
          // Insert order items
          const orderItemsPayload = currentCart.map(c => ({
            order_id: finalOrderId,
            menu_item_id: c.item.id,
            quantity: c.qty,
            unit_price: c.item.price,
            notes: c.notes || null
          }));

          const { error: itemsError } = await this.supabaseClient
            .from('order_items')
            .insert(orderItemsPayload);

          if (itemsError) throw itemsError;
        } else {
          throw new Error('No data returned from order creation.');
        }

      } else {
        // Demo mode (Offline order generation)
        finalOrderId = 10000 + Math.floor(Math.random() * 90000);
        orderDate = new Date();

        // Save order locally for debugging/history
        const localOrders = JSON.parse(localStorage.getItem('kankaew_local_orders') || '[]');
        localOrders.push({
          id: finalOrderId,
          created_at: orderDate,
          customer_name: customerName,
          table_number: tableNumber,
          phone: phone,
          notes: orderNotes,
          payment_method: paymentMethod,
          subtotal: totals.subtotal,
          service_charge: totals.serviceCharge,
          vat: totals.vat,
          total_amount: totals.grandTotal,
          items: currentCart
        });
        localStorage.setItem('kankaew_local_orders', JSON.stringify(localOrders));
      }

      // Success
      this.cart = [];
      this.saveCart();
      this.updateCartUI();
      
      // Reset Form
      document.getElementById('checkout-form').reset();
      
      // Close Cart Modal and Open Receipt Modal
      this.closeModal('cart-modal');
      this.showReceipt(finalOrderId, orderDate, customerName, tableNumber, phone, orderNotes, paymentMethod, currentCart, totals);

    } catch (err) {
      console.error('Checkout error:', err);
      alert('เกิดข้อผิดพลาดในการส่งคำสั่งซื้อไปยังระบบ: ' + (err.message || err.details || err));
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  }

  showReceipt(orderId, orderDate, customerName, tableNumber, phone, notes, paymentMethod, items, totals) {
    // Populate Receipt Paper
    document.getElementById('receipt-no').textContent = `OR-${orderId}`;
    
    // Format Date: DD/MM/YYYY HH:MM
    const day = String(orderDate.getDate()).padStart(2, '0');
    const month = String(orderDate.getMonth() + 1).padStart(2, '0');
    const year = orderDate.getFullYear() + 543; // Thai year format optional
    const hours = String(orderDate.getHours()).padStart(2, '0');
    const minutes = String(orderDate.getMinutes()).padStart(2, '0');
    
    document.getElementById('receipt-date').textContent = `${day}/${month}/${year} ${hours}:${minutes}`;
    document.getElementById('receipt-customer').textContent = customerName;
    document.getElementById('receipt-table').textContent = tableNumber || 'สั่งกลับบ้าน (Takeaway)';
    document.getElementById('receipt-payment').textContent = paymentMethod === 'qr_code' ? 'เงินโอน (PromptPay)' : 'เงินสด (Cash)';

    // Items list
    const itemsContainer = document.getElementById('receipt-items-container');
    itemsContainer.innerHTML = '';

    items.forEach(c => {
      const row = document.createElement('div');
      row.className = 'receipt-item-row';
      
      const totalPrice = (c.item.price * c.qty).toFixed(2);
      
      let noteMarkup = '';
      if (c.notes) {
        noteMarkup = `<div class="receipt-item-notes">* ${c.notes}</div>`;
      }

      row.innerHTML = `
        <div class="receipt-item-name-qty">
          <div>${c.item.name} x ${c.qty}</div>
          ${noteMarkup}
        </div>
        <div class="receipt-item-total">฿${totalPrice}</div>
      `;
      itemsContainer.appendChild(row);
    });

    // Totals
    document.getElementById('receipt-subtotal').textContent = `฿${totals.subtotal.toFixed(2)}`;
    document.getElementById('receipt-service').textContent = `฿${totals.serviceCharge.toFixed(2)}`;
    document.getElementById('receipt-vat').textContent = `฿${totals.vat.toFixed(2)}`;
    document.getElementById('receipt-grandtotal').textContent = `฿${totals.grandTotal.toFixed(2)}`;

    // Special order notes if any
    const rNotesRow = document.getElementById('receipt-notes-row');
    if (notes) {
      rNotesRow.style.display = 'block';
      document.getElementById('receipt-notes').textContent = notes;
    } else {
      rNotesRow.style.display = 'none';
    }

    // QR Payment Code generation (Only if QR Code payment selected)
    const qrSection = document.getElementById('receipt-qr-section');
    if (paymentMethod === 'qr_code') {
      qrSection.style.display = 'flex';
      
      // Calculate PromptPay amount
      const payAmount = totals.grandTotal.toFixed(2);
      
      // Load standard PromptPay API code generating image
      // promptpay.io API generates exact scan code based on phone and amount
      const qrCodeImg = document.getElementById('promptpay-qr-code-img');
      qrCodeImg.src = `https://promptpay.io/${this.promptPayNumber}/${payAmount}.png`;
      document.getElementById('receipt-promptpay-info').textContent = `พร้อมเพย์: ${this.promptPayNumber}`;
    } else {
      qrSection.style.display = 'none';
    }

    // Open Receipt Modal
    this.openModal('receipt-modal');
  }
}

// Start Application when loaded
window.addEventListener('DOMContentLoaded', () => {
  window.appInstance = new KankaewApp();
});
