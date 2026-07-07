-- ==========================================
-- Supabase Schema & Seed Data for Restaurant App
-- Copy and run this script in your Supabase SQL Editor.
-- ==========================================

-- 1. DROP EXISTING TABLES (If any, to start fresh)
drop table if exists orders cascade;
drop table if exists menu_items cascade;

-- 2. CREATE TABLE FOR MENU ITEMS
create table menu_items (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  description text,
  price decimal(10,2) not null,
  image_url text,
  category text not null, -- 'main', 'appetizer', 'dessert', 'drink'
  is_available boolean default true
);

-- 3. CREATE TABLE FOR ORDERS
create table orders (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  customer_name text not null,
  customer_phone text,
  table_number text, -- If empty, means Takeaway
  total_amount decimal(10,2) not null,
  status text default 'pending' check (status in ('pending', 'preparing', 'served', 'completed', 'cancelled')),
  payment_method text default 'cash' check (payment_method in ('cash', 'transfer')),
  items jsonb not null -- Array of items: [{"id": "...", "name": "...", "price": 120, "quantity": 2, "notes": "no spicy"}]
);

-- 4. ENABLE ROW LEVEL SECURITY (RLS)
alter table menu_items enable row level security;
alter table orders enable row level security;

-- 5. CREATE POLICIES FOR PUBLIC ACCESS
-- Allows anyone to view the menu items
create policy "Allow public read menu" on menu_items
  for select using (true);

-- Allows anyone to insert a new order (placing an order)
create policy "Allow public insert orders" on orders
  for insert with check (true);

-- Allows anyone to view orders (for order tracking/management page)
create policy "Allow public read orders" on orders
  for select using (true);

-- Allows anyone to update orders (for changing status in management page)
create policy "Allow public update orders" on orders
  for update using (true) with check (true);

-- 6. INSERT SEED DATA FOR THAI RESTAURANT MENU
insert into menu_items (name, description, price, image_url, category, is_available) values
-- อาหารจานหลัก (Main Courses)
('ผัดไทยกุ้งสด', 'ผัดไทยสูตรโบราณ เส้นเหนียวนุ่ม ปรุงรสกลมกล่อม เสิร์ฟพร้อมกุ้งสดตัวโต ถั่วงอก และกุยช่าย', 120.00, 'https://images.unsplash.com/photo-1626804475315-9444156cac6a?auto=format&fit=crop&w=600&q=80', 'main', true),
('ข้าวกะเพราหมูสับไข่ดาว', 'เมนูยอดฮิต ผัดกะเพราหมูสับรสชาติจัดจ้าน หอมใบกะเพราแท้ เสิร์ฟราดข้าวพร้อมไข่ดาวกรอบนอกไข่แดงเยิ้ม', 85.00, 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80', 'main', true),
('ต้มยำกุ้งน้ำข้น', 'ต้มยำกุ้งน้ำข้นรสจัดจ้าน สมุนไพรไทยครบเครื่อง ทั้งข่า ตะไคร้ ใบมะกรูด และเห็ดฟาง', 180.00, 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=80', 'main', true),
('แกงเขียวหวานไก่', 'แกงเขียวหวานไก่เนื้อนุ่ม น้ำแกงเข้มข้นหอมเครื่องแกง มะเขือเปราะกรอบหวาน เสิร์ฟร้อนๆ', 150.00, 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80', 'main', true),

-- ของทานเล่น (Appetizers)
('ปีกไก่ทอดเกลือ', 'ปีกไก่หมักเกลือและสมุนไพร ทอดจนเหลืองกรอบนอกนุ่มใน เสิร์ฟคู่กับน้ำจิ้มแจ่วสุดแซ่บ', 95.00, 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80', 'appetizer', true),
('ปอเปี๊ยะทอด', 'ปอเปี๊ยะไส้วุ้นเส้นและผักรวม ทอดกรอบแห้งไม่อมน้ำมัน เสิร์ฟพร้อมน้ำจิ้มบ๊วยหวานเจี๊ยบ', 80.00, 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', 'appetizer', true),
('ทอดมันกุ้ง', 'ทอดมันกุ้งเนื้อเด้งชุบเกล็ดขนมปังทอดกรอบสีเหลืองทอง หอมกลิ่นรากผักชีและพริกไทย', 110.00, 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80', 'appetizer', true),

-- ของหวาน (Desserts)
('ข้าวเหนียวมะม่วง', 'ข้าวเหนียวมูนกะทิสดหอมมัน ทานคู่กับมะม่วงน้ำดอกไม้สุกสีทองหวานฉ่ำ ราดน้ำกะทิเข้มข้น', 120.00, 'https://images.unsplash.com/photo-1621841957884-1210fe19d66d?auto=format&fit=crop&w=600&q=80', 'dessert', true),
('บัวลอยเผือกกะทิสด', 'บัวลอยเม็ดนุ่มเหนียวทำจากเนื้อเผือกแท้ ในน้ำกะทิสดหอมกลิ่นใบเตย รสชาติหวานมันเค็มกำลังดี', 60.00, 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80', 'dessert', true),

-- เครื่องดื่ม (Drinks)
('ชาไทยนมสด', 'ชาไทยพรีเมียม ชงสดแก้วต่อแก้ว หอมกลิ่นชาไทยแท้ รสชาติหวานมันเข้มข้นกำลังดี', 50.00, 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80', 'drink', true),
('น้ำอัญชันมะนาว', 'น้ำอัญชันสีน้ำเงินเข้มข้น เมื่อบีบมะนาวสดจะเปลี่ยนเป็นสีม่วงสวยงาม รสชาติเปรี้ยวหวานสดชื่น', 45.00, 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80', 'drink', true),
('น้ำมะพร้าวอ่อนปั่น', 'น้ำมะพร้าวอ่อนและเนื้อพรีเมียม ปั่นละเอียดจนเนื้อเนียน หวานกลมกล่อม หอมกลิ่นมะพร้าวธรรมชาติ', 65.00, 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80', 'drink', true);
