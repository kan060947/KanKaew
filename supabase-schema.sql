-- SQL Schema for Premium Restaurant Web Application (Kankaew Restaurant)
-- Copy and execute this script in your Supabase SQL Editor.

-- 1. Create MENU_ITEMS Table
CREATE TABLE IF NOT EXISTS public.menu_items (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text NOT NULL,
    description text,
    price numeric(10, 2) NOT NULL,
    category text NOT NULL, -- 'appetizer', 'main', 'dessert', 'drink'
    image_url text,
    available boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) for menu_items
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;

-- Allow public read access to menu items
CREATE POLICY "Allow public read access to menu items" 
    ON public.menu_items FOR SELECT USING (true);

-- Allow public write/edit (for demo admin purposes, though in production you'd restrict this)
CREATE POLICY "Allow public insert/update/delete for demo purposes" 
    ON public.menu_items FOR ALL USING (true);


-- 2. Create ORDERS Table
CREATE TABLE IF NOT EXISTS public.orders (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    customer_name text NOT NULL,
    table_number text,
    phone text,
    notes text,
    payment_method text NOT NULL, -- 'cash', 'qr_code'
    subtotal numeric(10, 2) NOT NULL,
    service_charge numeric(10, 2) NOT NULL,
    vat numeric(10, 2) NOT NULL,
    total_amount numeric(10, 2) NOT NULL,
    status text DEFAULT 'pending' NOT NULL -- 'pending', 'preparing', 'completed', 'cancelled'
);

-- Enable RLS for orders
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Allow public to insert orders (create orders)
CREATE POLICY "Allow public to create orders" 
    ON public.orders FOR INSERT WITH CHECK (true);

-- Allow public to read their own orders (in this demo, we allow reading all for simplicity)
CREATE POLICY "Allow public to read orders" 
    ON public.orders FOR SELECT USING (true);


-- 3. Create ORDER_ITEMS Table
CREATE TABLE IF NOT EXISTS public.order_items (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_id bigint REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
    menu_item_id bigint REFERENCES public.menu_items(id) NOT NULL,
    quantity integer NOT NULL CHECK (quantity > 0),
    unit_price numeric(10, 2) NOT NULL,
    notes text
);

-- Enable RLS for order items
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Allow public to insert order items
CREATE POLICY "Allow public to create order items" 
    ON public.order_items FOR INSERT WITH CHECK (true);

-- Allow public to read order items
CREATE POLICY "Allow public to read order items" 
    ON public.order_items FOR SELECT USING (true);


-- 4. Seed INITIAL MENU DATA
INSERT INTO public.menu_items (name, description, price, category, image_url, available) VALUES
('ช่อม่วงเสวย', 'แป้งนุ่มสอดไส้ไก่ผัดเครื่องเทศโบราณ ปั้นเป็นรูปดอกไม้สีม่วงอ่อนทานคู่กับผักชีและพริกขี้หนูสวน', 150.00, 'appetizer', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80', true),
('ทอดมันกุ้งลายเสือ', 'กุ้งสับเนื้อเด้งชุบเกล็ดขนมปังทอดจนเหลืองกรอบ เสิร์ฟพร้อมน้ำจิ้มบ๊วยเจี่ยรสหวานอมเปรี้ยว', 180.00, 'appetizer', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80', true),
('ปอเปี๊ยะทอดคุณยาย', 'ปอเปี๊ยะทอดไส้วุ้นเส้น หมูสับ และเห็ดหูหนู ปรุงรสกลมกล่อม ทอดกรอบไม่อมน้ำมัน', 120.00, 'appetizer', 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80', true),
('ผัดไทยกุ้งแม่น้ำย่าง', 'เส้นจันท์เหนียวนุ่มผัดซอสมะขามสูตรพิเศษ เสิร์ฟพร้อมกุ้งแม่น้ำเผาตัวโตเนื้อหวานมันเยิ้ม', 320.00, 'main', 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&auto=format&fit=crop&q=80', true),
('แกงเขียวหวานเนื้อริบอาย', 'เนื้อริบอายออสเตรเลียเคี่ยวในพริกแกงเขียวหวานเข้มข้น หอมกะทิสดและโหระพา', 380.00, 'main', 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format&fit=crop&q=80', true),
('ข้าวซอยไก่ยอดดอย', 'เส้นบะหมี่แบนในน้ำแกงข้าวซอยรสเข้มข้น หอมเครื่องแกงภาคเหนือ โรยหน้าด้วยหมี่กรอบและหอมแดง', 220.00, 'main', 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=80', true),
('ต้มยำกุ้งแม่น้ำมะพร้าวอ่อน', 'ต้มยำน้ำข้นรสจัดจ้าน ใส่กุ้งแม่น้ำสดๆ และเนื้อมะพร้าวอ่อนเคี้ยวเพลิน หอมเครื่องสมุนไพรสด', 350.00, 'main', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80', true),
('ข้าวเหนียวมะม่วงอกร่อง', 'ข้าวเหนียวมูนกะทิสดใบเตย หอมหวาน เมล็ดเรียงสวย ทานคู่กับมะม่วงอกร่องหวานหอมและน้ำราดกะทิ', 180.00, 'dessert', 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&auto=format&fit=crop&q=80', true),
('บัวลอยเผือกมะพร้าวอ่อน', 'บัวลอยแป้งเผือกเหนียวนุ่มในน้ำกะทิสดอุ่นๆ รสหวานมันกำลังดี โรยเนื้อมะพร้าวอ่อนขูดเส้น', 120.00, 'dessert', 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&auto=format&fit=crop&q=80', true),
('ไอศกรีมกะทิสดกานดา', 'ไอศกรีมกะทิสดทำเองรสเข้มข้น เสิร์ฟพร้อมลูกชิด ถั่วลิสงคั่วหอม และมะพร้าวอ่อน', 95.00, 'dessert', 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80', true),
('ชาไทยเย็นสูตรโบราณ', 'ชาไทยคัดพิเศษ ต้มสด ดึงรสชาติเข้มข้น ผสมนมข้นและนมสดรสกลมกล่อมสไตล์ไทยแท้', 85.00, 'drink', 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80', true),
('อัญชันมะนาวน้ำผึ้งป่า', 'น้ำสมุนไพรอัญชันออร์แกนิก เพิ่มความสดชื่นด้วยมะนาวแท้และน้ำผึ้งป่าเดือนห้า รสเปรี้ยวหวานลงตัว', 90.00, 'drink', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80', true),
('น้ำมะพร้าวเผาสดชาช่า', 'มะพร้าวเผาสดคัดเกรดพิเศษ หวานธรรมชาติจากสวน อุดมไปด้วยแร่ธาตุและความสดชื่น', 110.00, 'drink', 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&auto=format&fit=crop&q=80', true);
