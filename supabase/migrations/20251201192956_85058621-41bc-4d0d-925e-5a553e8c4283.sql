-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_role TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  avatar_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for products (public read access)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Create policies for testimonials (public read access)
CREATE POLICY "Testimonials are viewable by everyone" 
ON public.testimonials 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates on products
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products
INSERT INTO public.products (name, description, price, category, image_url, is_featured, stock_quantity) VALUES
('Ethiopian Sofa', 'Handcrafted sofa with traditional Ethiopian patterns and premium hardwood frame', 45000.00, 'Living Room', '/src/assets/living-room-sofa.jpg', true, 5),
('Classic Armchair', 'Elegant armchair perfect for any living space', 15000.00, 'Living Room', '/src/assets/living-room-armchair.jpg', true, 10),
('Coffee Table', 'Modern coffee table with Ethiopian hardwood', 12000.00, 'Living Room', '/src/assets/living-room-coffee-table.jpg', true, 8),
('Luxury Bed', 'Premium bed frame with traditional craftsmanship', 55000.00, 'Bedroom', '/src/assets/bedroom-bed.jpg', true, 4),
('Wardrobe', 'Spacious wardrobe with intricate Ethiopian design', 38000.00, 'Bedroom', '/src/assets/bedroom-wardrobe.jpg', true, 6),
('Dining Table', 'Elegant dining table for family gatherings', 42000.00, 'Dining', '/src/assets/dining-room-table.jpg', true, 3);

-- Insert sample testimonials
INSERT INTO public.testimonials (customer_name, customer_role, rating, comment, is_featured) VALUES
('Abebe Kebede', 'Homeowner', 5, 'The quality of the furniture is outstanding! The Ethiopian craftsmanship is evident in every detail. Our living room has been completely transformed.', true),
('Sarah Johnson', 'Interior Designer', 5, 'I regularly recommend this furniture to my clients. The blend of traditional Ethiopian design with modern functionality is exceptional.', true),
('Mulugeta Assefa', 'Business Owner', 4, 'Beautiful pieces that have lasted for years. The customer service was excellent and delivery was prompt. Highly recommended!', true),
('Helen Gebre', 'Architect', 5, 'These are investment pieces that will last a lifetime. The attention to detail and use of premium hardwood is impressive.', true);