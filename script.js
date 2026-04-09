// ─── Instagram mock data ───────────────────────────────────────────────────
// To connect to real posts, replace this array with the parsed response from:
//   GET https://graph.instagram.com/me/media
//     ?fields=id,caption,media_type,media_url,permalink,timestamp
//     &access_token={YOUR_ACCESS_TOKEN}
const PX = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067&fit=crop`;

const instagramMockPosts = [
  { imgUrl: "img/ig1.jpg", label: "OOTD",         likes: "3.2K", caption: "Soft layers for the day",  productId: "dinner-date-blouse",  linkUrl: "product.html?id=dinner-date-blouse"  },
  { imgUrl: "img/ig2.jpg", label: "Batik OOTD",   likes: "4.1K", caption: "Traditional meets modern", productId: "printed-hijab-scarf", linkUrl: "product.html?id=printed-hijab-scarf" },
  { imgUrl: "img/ig3.jpg", label: "Full look",     likes: "2.8K", caption: "Florals and headwrap",     productId: "cafe-knit-top",       linkUrl: "product.html?id=cafe-knit-top"       },
  { imgUrl: "img/ig4.jpg", label: "Scarf inspo",   likes: "5.1K", caption: "Shawl inspo for Raya",     productId: "printed-hijab-scarf", linkUrl: "product.html?id=printed-hijab-scarf" },
  { imgUrl: "img/ig5.jpg", label: "Modest glam",   likes: "2.3K", caption: "Wrapped up beautifully",   productId: "satin-midi-skirt",    linkUrl: "product.html?id=satin-midi-skirt"    },
  { imgUrl: "img/ig6.jpg", label: "New year look", likes: "3.7K", caption: "Starting the year soft",   productId: "linen-wide-pants",    linkUrl: "product.html?id=linen-wide-pants"    },
];

function renderInstagramGrid() {
  const grid = document.getElementById("ig-grid");
  if (!grid) return;
  grid.innerHTML = instagramMockPosts
    .map((post) => {
      const product = productCatalog[post.productId];
      const name = product ? product.name : post.label;
      const price = product ? formatIDR(product.price) : '';
      const href = post.linkUrl || `product.html?id=${post.productId}`;
      return `
      <a class="ig-card" href="${href}">
        <img src="${post.imgUrl}" alt="${name}" class="card-photo" loading="lazy" />
        <span class="badge ig-badge">${post.label}</span>
        <div class="ig-product-strip">
          <div class="ig-product-info">
            <span class="ig-product-name">${name}</span>
            <span class="ig-product-price">${price}</span>
          </div>
          <span class="ig-shop-pill">Shop &rarr;</span>
        </div>
      </a>`;
    })
    .join("");
}

function setupLookTabs() {
  const tabs = document.querySelectorAll("[data-tab]");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      document.querySelectorAll(".look-card").forEach((card) => {
        const tags = card.dataset.looktag || "";
        const show = target === "feed" || tags.includes(target);
        card.classList.toggle("tab-content-hidden", !show);
      });
    });
  });
}

const productCatalog = {
  // ── Abayas ────────────────────────────────────────────────────────────────
  "classic-black-abaya": {
    id: "classic-black-abaya",
    name: "Classic Black Abaya",
    price: 389000,
    category: "Abaya", catSlug: "abaya",
    type: "Affiliate item", badge: "Affiliate",
    rating: 4.8, reviewCount: 142,
    img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "A timeless fluid abaya with an open-front silhouette for modest, polished dressing every day.",
    story: "Amanina's trusted go-to abaya — structured enough for formal settings, relaxed enough for daily wear.",
    gradient: "blush-gradient"
  },
  "embroidered-abaya": {
    id: "embroidered-abaya",
    name: "Embroidered Abaya",
    price: 399000, originalPrice: 520000, discount: 23,
    category: "Abaya", catSlug: "abaya",
    type: "Personal collection", badge: "Sale",
    rating: 4.9, reviewCount: 208,
    img: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Delicate gold sleeve embroidery on a flowing silhouette for festive and formal occasions.",
    story: "One of the most-shared pieces from Amanina's Raya series — the embroidery adds exactly the right elegance.",
    gradient: "rose-gradient"
  },
  "pastel-abaya-set": {
    id: "pastel-abaya-set",
    name: "Pastel Abaya Set",
    price: 360000, originalPrice: 450000, discount: 20,
    category: "Abaya", catSlug: "abaya",
    type: "Affiliate item", badge: "20% Off",
    rating: 4.7, reviewCount: 95,
    img: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Soft muted-tone coordinated abaya set, perfect for café dates and family gatherings.",
    story: "Pastel shades that feel fresh and feminine — the set that topped Amanina's spring lookbook.",
    gradient: "cream-gradient"
  },
  "raya-abaya": {
    id: "raya-abaya",
    name: "Raya Kurung Abaya",
    price: 480000,
    category: "Abaya", catSlug: "abaya",
    type: "Limited edition", badge: "Raya Edit",
    rating: 4.6, reviewCount: 77,
    img: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "A modern kurung abaya silhouette with traditional craftsmanship for the festive season.",
    story: "From the 2026 Raya Edit — the style Amanina wore to family open houses this season.",
    gradient: "sand-gradient"
  },
  // ── Skirts ────────────────────────────────────────────────────────────────
  "satin-midi-skirt": {
    id: "satin-midi-skirt",
    name: "Satin Midi Skirt",
    price: 289000,
    category: "Skirt", catSlug: "skirt",
    type: "Affiliate item", badge: "Affiliate",
    rating: 4.7, reviewCount: 184,
    img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Feminine satin skirt with a fluid drape for dinner looks and elevated everyday styling.",
    story: "A saved favourite from Amanina's dinner-date reel, designed for a polished soft-glam silhouette.",
    gradient: "blush-gradient"
  },
  "pleated-midi-skirt": {
    id: "pleated-midi-skirt",
    name: "Pleated Midi Skirt",
    price: 199000, originalPrice: 259000, discount: 23,
    category: "Skirt", catSlug: "skirt",
    type: "Affiliate item", badge: "Sale",
    rating: 4.5, reviewCount: 130,
    img: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "A soft neutral pleated skirt that moves beautifully from brunch to dinner.",
    story: "One of the most-saved pieces on the influencer profile because it is simple and easy to style.",
    gradient: "sand-gradient"
  },
  "flowy-maxi-skirt": {
    id: "flowy-maxi-skirt",
    name: "Flowy Maxi Skirt",
    price: 310000,
    category: "Skirt", catSlug: "skirt",
    type: "Affiliate item", badge: "New In",
    rating: 4.6, reviewCount: 89,
    img: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Lightweight full-length maxi skirt with a graceful silhouette for modest everyday dressing.",
    story: "From Amanina's soft-dressing series — a skirt that drapes effortlessly and photographs beautifully.",
    gradient: "sage-gradient"
  },
  // ── Scarves ───────────────────────────────────────────────────────────────
  "printed-hijab-scarf": {
    id: "printed-hijab-scarf",
    name: "Printed Hijab Scarf",
    price: 149000,
    category: "Scarf", catSlug: "scarf",
    type: "Preloved item", badge: "Preloved",
    rating: 4.8, reviewCount: 267,
    img: "https://images.pexels.com/photos/3756166/pexels-photo-3756166.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Soft printed scarf with an easy drape and neutral tones for modest, feminine styling.",
    story: "A closet favourite from Amanina's personal marketplace, now shared with her followers.",
    gradient: "mauve-gradient"
  },
  "silk-shawl": {
    id: "silk-shawl",
    name: "Silk Shawl Scarf",
    price: 159000, originalPrice: 199000, discount: 20,
    category: "Scarf", catSlug: "scarf",
    type: "Affiliate item", badge: "20% Off",
    rating: 4.9, reviewCount: 167,
    img: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Luxuriously smooth silk-blend shawl in muted earth tones for effortless layering.",
    story: "Spotted in Amanina's hijab how-to reel — the drape stays in place all day and photographs beautifully.",
    gradient: "cream-gradient"
  },
  "daily-hijab": {
    id: "daily-hijab",
    name: "Daily Instant Hijab",
    price: 129000,
    category: "Scarf", catSlug: "scarf",
    type: "Affiliate item", badge: "Best Seller",
    rating: 4.6, reviewCount: 320,
    img: "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Soft jersey instant hijab that fits comfortably and keeps its shape throughout the day.",
    story: "The most-bought piece in Amanina's shop — no pinning required, stretches to fit all head sizes.",
    gradient: "rose-gradient"
  },
  // ── Tops ──────────────────────────────────────────────────────────────────
  "dinner-date-blouse": {
    id: "dinner-date-blouse",
    name: "Dinner Date Blouse",
    price: 249000,
    category: "Top", catSlug: "top",
    type: "Personal collection", badge: "Creator Pick",
    rating: 4.8, reviewCount: 156,
    img: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "A silky blouse with a soft structure that instantly lifts skirts or tailored pants.",
    story: "This is Amanina's go-to top when she wants a feminine look that still feels light and effortless.",
    gradient: "rose-gradient"
  },
  "cafe-knit-top": {
    id: "cafe-knit-top",
    name: "Café Knit Top",
    price: 179000, originalPrice: 219000, discount: 18,
    category: "Top", catSlug: "top",
    type: "Affiliate item", badge: "Sale",
    rating: 4.7, reviewCount: 201,
    img: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Lightweight knit texture with a relaxed fit for slow café mornings and casual dates.",
    story: "Popular in Amanina's casual café reel because it feels clean, soft, and easy to pair.",
    gradient: "cream-gradient"
  },
  "linen-ruffle-blouse": {
    id: "linen-ruffle-blouse",
    name: "Linen Ruffle Blouse",
    price: 235000,
    category: "Top", catSlug: "top",
    type: "Affiliate item", badge: "New In",
    rating: 4.5, reviewCount: 58,
    img: "https://images.pexels.com/photos/2272997/pexels-photo-2272997.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Relaxed linen blouse with soft ruffle detailing on collar and cuffs for an airy feminine feel.",
    story: "A new addition to Amanina's summer wardrobe — pairs beautifully with any midi skirt or wide pants.",
    gradient: "sand-gradient"
  },
  // ── Bottoms ───────────────────────────────────────────────────────────────
  "linen-wide-pants": {
    id: "linen-wide-pants",
    name: "Linen Wide Pants",
    price: 269000,
    category: "Bottom", catSlug: "bottom",
    type: "Affiliate item", badge: "Everyday Pick",
    rating: 4.6, reviewCount: 143,
    img: "https://images.pexels.com/photos/1035685/pexels-photo-1035685.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Breathable wide-leg pants for a graceful silhouette and all-day comfort.",
    story: "Chosen for women who want a soft and modest base item that works with almost every top.",
    gradient: "sage-gradient"
  },
  "tailored-trousers": {
    id: "tailored-trousers",
    name: "Tailored Trousers",
    price: 245000, originalPrice: 295000, discount: 17,
    category: "Bottom", catSlug: "bottom",
    type: "Affiliate item", badge: "Sale",
    rating: 4.7, reviewCount: 104,
    img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop",
    description: "Structured high-waist trousers with a clean silhouette for smart-casual or formal dressing.",
    story: "A versatile wardrobe staple that Amanina styles effortlessly in her office and event looks.",
    gradient: "mauve-gradient"
  }
};

const shippingFee = 15000;

function formatIDR(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("glimsy-cart")) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("glimsy-cart", JSON.stringify(cart));
}

function subtotal(cart) {
  return cart.reduce((sum, item) => {
    const product = productCatalog[item.id];
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = count;
  });
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  saveCart(cart);
  updateCartCount();
  window.location.href = "cart.html";
}

function renderInfluencerProducts() {
  const grid = document.getElementById('inf-product-grid');
  if (!grid) return;
  const products = Object.values(productCatalog);
  grid.innerHTML = products.map(p => {
    const starsHTML = Array.from({length: 5}, (_, i) =>
      `<span class="ips-star${i < Math.round(p.rating) ? ' filled' : ''}">★</span>`
    ).join('');
    const imgStyle = p.img
      ? `style="background-image:url(${p.img});background-size:cover;background-position:center top;"`
      : `class="${p.gradient}"`;
    return `
      <a class="inf-product-card" href="product.html?id=${p.id}">
        <div class="inf-product-photo" ${imgStyle}></div>
        <div class="inf-product-info">
          <p class="inf-product-name">${p.name}</p>
          <div class="inf-product-bottom">
            <span class="inf-product-price">${formatIDR(p.price)}</span>
            <span class="inf-product-stars">${starsHTML}</span>
          </div>
        </div>
      </a>`;
  }).join('');
}

function renderProductPage() {
  if (document.body.dataset.page !== "product") return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "satin-midi-skirt";
  const product = productCatalog[productId] || productCatalog["satin-midi-skirt"];

  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = formatIDR(product.price);
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("product-category").textContent = product.category;
  document.getElementById("product-type").textContent = product.type;
  document.getElementById("product-badge").textContent = product.badge;

  const addButton = document.getElementById("add-to-cart");
  addButton.dataset.product = product.id;

  const visual = document.getElementById("product-visual-main");
  const overlayHTML = `<div class="product-photo-info"><p class="product-photo-name">${product.name}</p><p class="product-photo-price">${formatIDR(product.price)}</p></div>`;
  if (product.img) {
    visual.className = 'product-visual';
    visual.innerHTML = `<img src="${product.img}" alt="${product.name}" class="banner-photo" style="object-position:center top" /><span class="badge">${product.badge}</span>${overlayHTML}`;
  } else {
    visual.className = `product-visual ${product.gradient}`;
    visual.innerHTML = `<span class="badge">${product.badge}</span>${overlayHTML}`;
  }

  renderProductReviews(product.id);

  // Populate look cards with price + stars
  document.querySelectorAll('#look-grid [data-look-id]').forEach(card => {
    const p = productCatalog[card.dataset.lookId];
    if (!p) return;
    const starsHTML = Array.from({length: 5}, (_, i) =>
      `<span class="r-star${i < Math.round(p.rating) ? ' filled' : ''}">★</span>`
    ).join('');
    card.querySelector('.look-card-stars').innerHTML = starsHTML;
    card.querySelector('.look-card-price').textContent = formatIDR(p.price);
    if (p.img) {
      const vis = card.querySelector('.visual');
      vis.className = 'visual';
      vis.style.backgroundImage = `url(${p.img})`;
      vis.style.backgroundSize = 'cover';
      vis.style.backgroundPosition = 'center top';
    }
  });
}
function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) {
    const idx = cart.indexOf(item);
    cart.splice(idx, 1);
  }
  saveCart(cart);
  updateCartCount();
  renderCartPage();
}

function renderCartPage() {
  if (document.body.dataset.page !== "cart") return;

  const cartItems = document.getElementById("cart-items");
  const cart = getCart();

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <h3>Your cart is still empty</h3>
        <p>Browse the influencer profile and tap a look to start shopping.</p>
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map((item) => {
      const p = productCatalog[item.id];
      const imgStyle = p.img
        ? `background-image:url(${p.img});background-size:cover;background-position:center top;`
        : '';
      const gradClass = p.img ? '' : p.gradient || '';
      return `
        <article class="cart-item">
          <div class="cart-item-photo ${gradClass}" style="${imgStyle}"></div>
          <div class="cart-item-info">
            <p class="cart-item-name">${p.name}</p>
            <p class="cart-item-price">${formatIDR(p.price)}</p>
            <div class="cart-qty-row">
              <button class="cart-qty-btn" onclick="updateQty('${p.id}', -1)">−</button>
              <span class="cart-qty-num">${item.qty}</span>
              <button class="cart-qty-btn" onclick="updateQty('${p.id}', 1)">+</button>
            </div>
          </div>
          <p class="cart-item-total">${formatIDR(p.price * item.qty)}</p>
        </article>
      `;
    }).join("");
  }

  const cartSubtotal = subtotal(cart);
  document.getElementById("subtotal-value").textContent = formatIDR(cartSubtotal);
  document.getElementById("shipping-value").textContent = formatIDR(shippingFee);
  document.getElementById("total-value").textContent = formatIDR(cartSubtotal + shippingFee);
}

function renderCheckoutSummary() {
  if (document.body.dataset.page !== "checkout") return;

  const wrap = document.getElementById("checkout-summary");
  const cart = getCart();

  if (!cart.length) {
    wrap.innerHTML = `<div class="empty-state">No items yet. Please add a product before checkout.</div>`;
    document.getElementById("checkout-total").textContent = formatIDR(shippingFee);
    return;
  }

  wrap.innerHTML = cart
    .map((item) => {
      const p = productCatalog[item.id];
      const imgStyle = p.img
        ? `background-image:url(${p.img});background-size:cover;background-position:center top;`
        : '';
      const gradClass = p.img ? '' : p.gradient || '';
      return `
        <div class="summary-item">
          <div class="cart-item-photo ${gradClass}" style="${imgStyle}"></div>
          <div class="cart-item-info">
            <p class="cart-item-name">${p.name}</p>
            <p class="cart-item-price">Qty ${item.qty} · ${formatIDR(p.price)}</p>
          </div>
          <p class="cart-item-total">${formatIDR(p.price * item.qty)}</p>
        </div>
      `;
    })
    .join("");

  document.getElementById("checkout-total").textContent = formatIDR(subtotal(cart) + shippingFee);
}

function setupButtons() {
  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-cart]");
    if (addButton) {
      event.preventDefault();
      addToCart(addButton.dataset.product);
    }

    const followButton = event.target.closest("[data-follow]");
    if (followButton) {
      followButton.textContent = followButton.textContent === "Follow" ? "Following" : "Follow";
      followButton.classList.toggle("btn-secondary");
    }
  });
}

function setupCheckoutForm() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "thank-you.html";
  });
}

function setupThankYouPage() {
  if (document.body.dataset.page !== "thank-you") return;
  localStorage.removeItem("glimsy-cart");
}

// ─── Influencers Listing Page ────────────────────────────────────────────────
const influencersList = [
  {
    id: "amanina_zakaria",
    name: "Amanina Zakaria",
    handle: "@amanina_zakaria",
    followers: "74.4K",
    posts: 280,
    niche: "Modest fashion, Raya looks & everyday OOTD",
    cat: ["modest"],
    banner: "img/ig2.jpg",
    avatar: "img/avatar.jpg",
    profileUrl: "influencer.html",
    products: [
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/3756166/pexels-photo-3756166.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    ]
  },
  {
    id: "luna_mahira",
    name: "Luna Mahira",
    handle: "@lunainlinen",
    followers: "38.2K",
    posts: 194,
    niche: "Café layers, pastel basics & slow fashion",
    cat: ["minimal"],
    banner: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=800&h=240&fit=crop",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    profileUrl: "influencer.html",
    products: [
      "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    ]
  },
  {
    id: "safa_kirei",
    name: "Safa Kirei",
    handle: "@safascarves",
    followers: "29.8K",
    posts: 158,
    niche: "Scarves, skirts & soft feminine staples",
    cat: ["modest", "traditional"],
    banner: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=800&h=240&fit=crop",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    profileUrl: "influencer.html",
    products: [
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/6311646/pexels-photo-6311646.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/3756166/pexels-photo-3756166.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    ]
  },
  {
    id: "hanis_adlina",
    name: "Hanis Adlina",
    handle: "@hanis.ootd",
    followers: "52.1K",
    posts: 312,
    niche: "Street style, bold prints & aesthetic OOTDs",
    cat: ["street"],
    banner: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=800&h=240&fit=crop",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    profileUrl: "influencer.html",
    products: [
      "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/2272997/pexels-photo-2272997.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    ]
  },
  {
    id: "rina_sofea",
    name: "Rina Sofea",
    handle: "@rina.modest",
    followers: "21.5K",
    posts: 134,
    niche: "Traditional fusion, batik & festive wardrobe",
    cat: ["modest", "traditional"],
    banner: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&w=800&h=240&fit=crop",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    profileUrl: "influencer.html",
    products: [
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    ]
  },
  {
    id: "zara_nadia",
    name: "Zara Nadia",
    handle: "@zara.minimal",
    followers: "41.5K",
    posts: 221,
    niche: "Neutral tones, wardrobe essentials & curated basics",
    cat: ["minimal"],
    banner: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=800&h=240&fit=crop",
    avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    profileUrl: "influencer.html",
    products: [
      "https://images.pexels.com/photos/1035685/pexels-photo-1035685.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    ]
  }
];

const followedInfluencers = new Set(JSON.parse(localStorage.getItem('glimsy-follows') || '[]'));

function saveFollows() {
  localStorage.setItem('glimsy-follows', JSON.stringify([...followedInfluencers]));
}

function renderInfluencersPage() {
  if (document.body.dataset.page !== 'influencers') return;

  const grid = document.getElementById('inf-grid');
  const countEl = document.getElementById('inf-count');
  if (!grid) return;

  let active = 'all';

  function render(cat) {
    const list = cat === 'all' ? influencersList : influencersList.filter(i => i.cat.includes(cat));
    if (countEl) countEl.textContent = `${list.length} influencer${list.length !== 1 ? 's' : ''}`;
    grid.innerHTML = list.map(inf => {
      const isFollowing = followedInfluencers.has(inf.id);
      const avatarEl = inf.avatar
        ? `<img src="${inf.avatar}" alt="${inf.name}" class="inf-card-avatar" />`
        : `<div class="inf-card-avatar-placeholder">${inf.name.charAt(0)}</div>`;
      const bannerImg = inf.banner
        ? `<img src="${inf.banner}" alt="${inf.name} banner" class="inf-card-banner-img" />`
        : '';
      const productSquares = inf.products.map(url =>
        `<img src="${url}" alt="product" class="inf-card-product-img" loading="lazy" />`
      ).join('');
      return `
        <div class="inf-card">
          <div class="inf-card-banner">
            ${bannerImg}
            <div class="inf-card-avatar-wrap">${avatarEl}</div>
          </div>
          <div class="inf-card-body">
            <div class="inf-card-top-row">
              <div>
                <h3 class="inf-card-name">${inf.name}</h3>
                <p class="inf-card-handle">${inf.handle}</p>
              </div>
              <button
                class="inf-follow-btn${isFollowing ? ' following' : ''}"
                data-follow-id="${inf.id}"
                aria-label="Follow ${inf.name}"
              >${isFollowing ? 'Following' : 'Follow'}</button>
            </div>
            <div class="inf-card-stats">
              <span><strong>${inf.followers}</strong> followers</span>
              <span><strong>${inf.posts}</strong> posts</span>
            </div>
            <p class="inf-card-niche">${inf.niche}</p>
            <div class="inf-card-products">${productSquares}</div>
            <a class="inf-view-btn" href="${inf.profileUrl}">View Profile &rarr;</a>
          </div>
        </div>`;
    }).join('');
  }

  render(active);

  // Category filter
  document.querySelectorAll('[data-inf-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-inf-cat]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      active = btn.dataset.infCat;
      render(active);
    });
  });

  // Follow toggle via event delegation
  grid.addEventListener('click', e => {
    const btn = e.target.closest('[data-follow-id]');
    if (!btn) return;
    const id = btn.dataset.followId;
    if (followedInfluencers.has(id)) {
      followedInfluencers.delete(id);
      btn.textContent = 'Follow';
      btn.classList.remove('following');
    } else {
      followedInfluencers.add(id);
      btn.textContent = 'Following';
      btn.classList.add('following');
    }
    saveFollows();
  });
}

// ─── Signup Discount Bar ─────────────────────────────────────────────────────
function setupSignupBar() {
  const bar = document.getElementById('signup-bar');
  if (!bar) return;

  // Hide if already dismissed or already signed up
  if (localStorage.getItem('glimsy-signup-dismissed')) {
    bar.classList.add('dismissed');
    return;
  }
  if (localStorage.getItem('glimsy-signed-up')) {
    bar.classList.add('show-success');
  }

  document.getElementById('signup-bar-close')?.addEventListener('click', () => {
    bar.classList.add('dismissed');
    localStorage.setItem('glimsy-signup-dismissed', '1');
  });

  document.getElementById('signup-success-close')?.addEventListener('click', () => {
    bar.classList.add('dismissed');
    localStorage.setItem('glimsy-signup-dismissed', '1');
  });

  document.getElementById('signup-bar-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-bar-email')?.value.trim();
    if (!email) return;
    // Store signup (in real app, POST to backend)
    localStorage.setItem('glimsy-signed-up', email);
    bar.classList.add('show-success');
  });
}

// ─── Shop Page ──────────────────────────────────────────────────────────────
function starsHTML(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="shop-star${i < Math.round(rating) ? ' filled' : ''}">&#9733;</span>`
  ).join('');
}

let currentShopCat = 'all';
let currentShopSort = 'default';

function setupShopFilters() {
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentShopCat = pill.dataset.cat;
      renderShopGrid(currentShopCat, currentShopSort);
    });
  });

  const sortSelect = document.getElementById('shop-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentShopSort = e.target.value;
      renderShopGrid(currentShopCat, currentShopSort);
    });
  }
}

function renderShopGrid(cat, sort) {
  const grid = document.getElementById('shop-grid');
  const countEl = document.getElementById('shop-count');
  if (!grid) return;

  let products = Object.values(productCatalog);

  if (cat !== 'all') {
    products = products.filter(p => p.catSlug === cat);
  }

  if (sort === 'price-asc') products.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') products.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') products.sort((a, b) => (b.rating || 0) - (a.rating || 0));

  if (countEl) countEl.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;

  if (!products.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><h3>No products found</h3><p>Try a different category.</p></div>`;
    return;
  }

  grid.innerHTML = products.map(p => {
    const discBadge = p.discount ? `<span class="shop-disc-badge">-${p.discount}%</span>` : '';
    const priceHTML = p.originalPrice
      ? `<s class="price-old">${formatIDR(p.originalPrice)}</s><span class="price-now">${formatIDR(p.price)}</span>`
      : `<span class="price-now">${formatIDR(p.price)}</span>`;
    return `
      <a class="shop-card" href="product.html?id=${p.id}">
        <div class="shop-card-img-wrap">
          <img src="${p.img}" alt="${p.name}" class="shop-card-img" loading="lazy" />
          ${discBadge}
          <span class="shop-type-badge">${p.badge}</span>
        </div>
        <div class="shop-card-info">
          <p class="shop-card-cat">${p.category}</p>
          <h3 class="shop-card-name">${p.name}</h3>
          <div class="shop-card-stars">${starsHTML(p.rating || 5)}<span class="stars-count">(${p.reviewCount || 0})</span></div>
          <div class="shop-card-price">${priceHTML}</div>
        </div>
      </a>`;
  }).join('');
}

function renderShopPage() {
  if (document.body.dataset.page !== 'shop') return;
  const params = new URLSearchParams(window.location.search);
  const initCat = params.get('cat') || 'all';
  currentShopCat = initCat;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === initCat));
  setupShopFilters();
  renderShopGrid(initCat, currentShopSort);
}

// ─── Product Reviews ──────────────────────────────────────────────────────────
const productReviews = {
  "classic-black-abaya": [
    { author: "Nadia R.", avatar: "N", rating: 5, date: "Mar 28, 2026", verified: true, comment: "Absolutely love this abaya! The fabric is so smooth and the fit is perfect. I wore it to a family event and got so many compliments. Will definitely buy again." },
    { author: "Syafiqah M.", avatar: "S", rating: 5, date: "Mar 20, 2026", verified: true, comment: "Great quality for the price. Very flowy and modest. Amanina's recommendation was spot on — this is now my everyday abaya." },
    { author: "Hana Z.", avatar: "H", rating: 4, date: "Mar 14, 2026", verified: true, comment: "Really nice silhouette. The sleeve length is generous and the material doesn't crease easily. Just wish it came in more colours." },
    { author: "Liyana A.", avatar: "L", rating: 5, date: "Feb 27, 2026", verified: false, comment: "Bought this for my sister and she loves it. Delivery was fast and packaging was neat. Highly recommend!" },
  ],
  "embroidered-abaya": [
    { author: "Izzati K.", avatar: "I", rating: 5, date: "Apr 2, 2026", verified: true, comment: "The gold embroidery is even more beautiful in person. I wore this for Raya and felt like royalty. Perfect length and the fabric feels premium." },
    { author: "Soraya H.", avatar: "S", rating: 5, date: "Mar 30, 2026", verified: true, comment: "Worth every ringgit. The embroidery detail on the sleeves is so intricate. I got so many dm's after posting my Raya outfit." },
    { author: "Aini B.", avatar: "A", rating: 4, date: "Mar 21, 2026", verified: true, comment: "Very elegant. Fits true to size. I went with M and I'm 163cm — it hits just above the floor, perfect for heels." },
  ],
  "pastel-abaya-set": [
    { author: "Fatin N.", avatar: "F", rating: 5, date: "Mar 18, 2026", verified: true, comment: "The pastel colour is exactly what I needed for spring. The set is so well coordinated and the fabric is lightweight. Love it!" },
    { author: "Maryam O.", avatar: "M", rating: 4, date: "Mar 10, 2026", verified: true, comment: "Really pretty set. The colour in real life is slightly more muted than in photos but still gorgeous. Very comfortable to wear." },
    { author: "Dina R.", avatar: "D", rating: 5, date: "Feb 25, 2026", verified: false, comment: "Perfect for family photos. The pastel tone photographs beautifully. My whole family ordered from Amanina's shop now 😄" },
  ],
  "raya-abaya": [
    { author: "Najwa S.", avatar: "N", rating: 5, date: "Apr 4, 2026", verified: true, comment: "This is the most beautiful Raya abaya I've ever owned. The craftsmanship is exceptional and it's so comfortable to wear during long family visits." },
    { author: "Hafiza M.", avatar: "H", rating: 4, date: "Apr 1, 2026", verified: true, comment: "Stunning piece. Fits beautifully and the fabric is high quality. Just note that the sizing runs slightly small, so I'd suggest sizing up one." },
  ],
  "satin-midi-skirt": [
    { author: "Yasmin A.", avatar: "Y", rating: 5, date: "Mar 31, 2026", verified: true, comment: "This skirt is everything! Super silky, flattering, and it moves beautifully. I paired it with the dinner date blouse and the look was *chef's kiss*." },
    { author: "Nurul H.", avatar: "N", rating: 5, date: "Mar 22, 2026", verified: true, comment: "Wore this on a dinner date and received so many compliments. The satin drape is so elegant. Runs true to size." },
    { author: "Amira Z.", avatar: "A", rating: 4, date: "Mar 6, 2026", verified: true, comment: "Beautiful skirt! The fabric quality is really good. I only gave 4 stars because the zip is a little stiff, but overall a great purchase." },
    { author: "Khairina P.", avatar: "K", rating: 5, date: "Feb 19, 2026", verified: false, comment: "Exactly as described. Amanina styled it so well and it looks just as pretty in person. The satin is not too shiny — perfect balance." },
    { author: "Sarah L.", avatar: "S", rating: 4, date: "Jan 30, 2026", verified: true, comment: "Really love this skirt. Great length for modest dressing. Paired it with a knit top and looked effortlessly chic." },
  ],
  "pleated-midi-skirt": [
    { author: "Zara M.", avatar: "Z", rating: 5, date: "Mar 25, 2026", verified: true, comment: "Such a versatile skirt. The pleats are so soft and it flows so nicely. Great for office wear and weekend outings alike." },
    { author: "Farah I.", avatar: "F", rating: 4, date: "Mar 12, 2026", verified: true, comment: "Lovely quality for the price, especially with the discount! The neutral tone goes with literally everything in my wardrobe." },
    { author: "Rania S.", avatar: "R", rating: 5, date: "Feb 28, 2026", verified: false, comment: "This was my first purchase from Glimsy and I'm obsessed. The skirt is so pretty and the packaging was adorable." },
  ],
  "flowy-maxi-skirt": [
    { author: "Aliyah T.", avatar: "A", rating: 5, date: "Apr 3, 2026", verified: true, comment: "Perfect maxi skirt for someone who wants a modest, elegant look without compromising on style. The flow is amazing." },
    { author: "Noor J.", avatar: "N", rating: 4, date: "Mar 17, 2026", verified: true, comment: "Beautiful and lightweight. I'm 160cm and the length is perfect for flats. Highly recommend for petite girls!" },
  ],
  "printed-hijab-scarf": [
    { author: "Bella N.", avatar: "B", rating: 5, date: "Apr 5, 2026", verified: true, comment: "This scarf is so lightweight and drapes beautifully. The print is subtle and sophisticated. Goes with so many outfits." },
    { author: "Aisyah K.", avatar: "A", rating: 5, date: "Mar 29, 2026", verified: true, comment: "Love the print! It's not too loud and not too plain. The texture is soft against skin. Will be buying the other colours." },
    { author: "Rina H.", avatar: "R", rating: 5, date: "Mar 15, 2026", verified: true, comment: "Best scarf I've bought this year. Easy to style and stays in place all day. Amanina knows her stuff!" },
    { author: "Maziah A.", avatar: "M", rating: 4, date: "Mar 2, 2026", verified: false, comment: "Pretty scarf, neutral tones are versatile. My only wish is that it was a tiny bit longer but overall very happy with it." },
    { author: "Tasha R.", avatar: "T", rating: 5, date: "Feb 14, 2026", verified: true, comment: "Quality is way better than I expected for the price. The fabric feels premium and photographs so beautifully." },
  ],
  "silk-shawl": [
    { author: "Wafaa S.", avatar: "W", rating: 5, date: "Apr 6, 2026", verified: true, comment: "This shawl is gorgeous. The silk blend drapes effortlessly and the earth tones are timeless. So worth the price, especially with the discount!" },
    { author: "Layla M.", avatar: "L", rating: 5, date: "Mar 27, 2026", verified: true, comment: "Feels incredibly luxurious. I've been wearing it every day since it arrived. The colour is beautifully muted and sophisticated." },
    { author: "Sofia N.", avatar: "S", rating: 4, date: "Mar 11, 2026", verified: true, comment: "Really beautiful product. Wrapping takes a little practice but once you get it right it looks incredible. Follows Amanina's tutorial." },
  ],
  "daily-hijab": [
    { author: "Huda A.", avatar: "H", rating: 5, date: "Apr 7, 2026", verified: true, comment: "The most comfortable instant hijab I've ever worn. No pins, no adjusting, no slipping. I bought 5 in different colours!" },
    { author: "Iman Z.", avatar: "I", rating: 5, date: "Apr 1, 2026", verified: true, comment: "Perfect for busy mornings. This is now part of my daily routine. The jersey fabric is breathable and stays in shape all day." },
    { author: "Nur B.", avatar: "N", rating: 4, date: "Mar 24, 2026", verified: true, comment: "Great everyday hijab. The stretch fits perfectly and it doesn't feel too tight. The only thing is it wrinkles a bit after washing but still love it." },
    { author: "Selena T.", avatar: "S", rating: 5, date: "Mar 8, 2026", verified: false, comment: "I recommended this to all my friends. So easy to wear and looks so neat. Amanina's pick never disappoints." },
  ],
  "dinner-date-blouse": [
    { author: "Mira J.", avatar: "M", rating: 5, date: "Mar 30, 2026", verified: true, comment: "This blouse is so elegant. The silky texture feels amazing and the structure is just right — not too stiff, not too relaxed. Perfect for dining out." },
    { author: "Farah N.", avatar: "F", rating: 4, date: "Mar 19, 2026", verified: true, comment: "Lovely blouse! Paired it with the satin midi skirt and looked amazing. The fit is slightly loose on me (I'm XS) but still flattering." },
    { author: "Dania H.", avatar: "D", rating: 5, date: "Mar 3, 2026", verified: true, comment: "Amanina's personal collection never disappoints. This blouse photographs like a dream and feels so luxurious." },
  ],
  "cafe-knit-top": [
    { author: "Tasya R.", avatar: "T", rating: 5, date: "Apr 4, 2026", verified: true, comment: "Obsessed with this knit top. The texture is soft, not scratchy at all. Exactly the casual-chic vibe I was looking for." },
    { author: "Hana K.", avatar: "H", rating: 4, date: "Mar 22, 2026", verified: true, comment: "Really cute top. Fits relaxed which I love. Great for café days and even casual office settings. The discount made it an easy buy!" },
    { author: "Nisa A.", avatar: "N", rating: 5, date: "Mar 9, 2026", verified: false, comment: "This was my first knit top purchase and I'm converted. So easy to style and so comfortable. Worth every penny." },
  ],
  "linen-ruffle-blouse": [
    { author: "Zahra M.", avatar: "Z", rating: 5, date: "Apr 6, 2026", verified: true, comment: "The ruffle detailing is so dainty and feminine. The linen fabric is breathable and doesn't wrinkle too badly. Love this new addition!" },
    { author: "Azra I.", avatar: "A", rating: 4, date: "Mar 31, 2026", verified: true, comment: "Really pretty blouse. The ruffle on the collar is subtle and elegant. Would love it in more colours." },
  ],
  "linen-wide-pants": [
    { author: "Iman S.", avatar: "I", rating: 5, date: "Mar 28, 2026", verified: true, comment: "These pants are so comfortable and elegant at the same time. The wide leg silhouette is so graceful and modest. My new wardrobe staple." },
    { author: "Siti N.", avatar: "S", rating: 4, date: "Mar 16, 2026", verified: true, comment: "Beautiful pants. The linen is high quality and very breathable. Great for the Malaysian heat. Pairs well with almost any top." },
    { author: "Lina A.", avatar: "L", rating: 5, date: "Mar 5, 2026", verified: false, comment: "Exactly what I needed. Simple, modest, and so comfortable. I've worn these to the office, to events, and even on travel." },
  ],
  "tailored-trousers": [
    { author: "Nadia L.", avatar: "N", rating: 5, date: "Apr 5, 2026", verified: true, comment: "These trousers are so well cut. The high waist is flattering and the fabric holds its shape throughout the day. Sale price was unbeatable." },
    { author: "Leila K.", avatar: "L", rating: 4, date: "Mar 26, 2026", verified: true, comment: "Great trousers for work. Smart, clean silhouette. I paired with the linen ruffle blouse and it looked very put together." },
    { author: "Anisa F.", avatar: "A", rating: 5, date: "Mar 13, 2026", verified: true, comment: "I've been looking for the perfect tailored trouser for months. These are it. The fit is impeccable and the fabric is quality." },
  ]
};

function starsRowHTML(rating, size) {
  const cls = size === 'lg' ? 'rev-star' : 'r-star';
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="${cls}${i < Math.round(rating) ? ' filled' : ''}">&#9733;</span>`
  ).join('');
}

function renderProductReviews(productId) {
  const summaryEl = document.getElementById('reviews-summary');
  const listEl = document.getElementById('reviews-list');
  const headingEl = document.getElementById('reviews-heading');
  if (!summaryEl || !listEl) return;

  const reviews = productReviews[productId] || [];
  const product = productCatalog[productId];
  const avg = product ? (product.rating || 5) : 5;
  const total = product ? (product.reviewCount || reviews.length) : reviews.length;

  if (headingEl) headingEl.textContent = `${total} reviews for this product`;

  // Star breakdown counts
  const buckets = [0, 0, 0, 0, 0];
  reviews.forEach(r => { if (r.rating >= 1 && r.rating <= 5) buckets[r.rating - 1]++; });
  // If no actual reviews match, distribute based on avg
  const useBuckets = reviews.length ? buckets : [0, 0, Math.round(total * 0.05), Math.round(total * 0.15), total - Math.round(total * 0.2)];

  const maxBucket = Math.max(...useBuckets, 1);

  summaryEl.innerHTML = `
    <div class="rev-avg-score">${avg.toFixed(1)}</div>
    <div class="rev-avg-stars">${starsRowHTML(avg, 'lg')}</div>
    <p class="rev-avg-label">Based on ${total} reviews</p>
    ${[5,4,3,2,1].map(star => {
      const count = useBuckets[star - 1];
      const pct = Math.round((count / maxBucket) * 100);
      return `<div class="rev-bar-row">
        <span class="rev-bar-label">${star}<span class="s-icon">&#9733;</span></span>
        <div class="rev-bar-track"><div class="rev-bar-fill" style="width:${pct}%"></div></div>
        <span class="rev-bar-count">${count}</span>
      </div>`;
    }).join('')}
  `;

  if (!reviews.length) {
    listEl.innerHTML = `<div class="empty-state"><p>No written reviews yet. Be the first to review this product!</p></div>`;
    return;
  }

  listEl.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-card-top">
        <div class="review-avatar">${r.avatar}</div>
        <div class="review-meta">
          <div class="review-meta-top">
            <span class="review-author">${r.author}</span>
            <span class="review-date">${r.date}</span>
          </div>
          <div class="review-stars">${starsRowHTML(r.rating, 'sm')}</div>
          ${r.verified ? `<span class="review-verified">&#10003; Verified Purchase</span>` : ''}
        </div>
      </div>
      <p class="review-body">${r.comment}</p>
    </div>
  `).join('');
}

// ─── Hero Banner Slider ──────────────────────────────────────────────────────
const heroSlideData = [
  {
    img: 'img/ig2.jpg',
    tag: 'New Collection',
    title: 'Abaya Collection',
    sub: 'Elegant modest wear for every occasion',
    href: 'shop.html?cat=abaya',
    btnText: 'Shop Now'
  },
  {
    img: 'img/ig1.jpg',
    tag: 'Raya Edit 2026',
    title: 'Floral Kurung Series',
    sub: 'Soft florals and dreamy layers for the festive season',
    href: 'shop.html',
    btnText: 'Shop Now'
  },
  {
    img: 'img/reel1.jpg',
    tag: 'Modest Everyday',
    title: 'Scarf & Style Guide',
    sub: 'Amanina\'s most-saved hijab looks, now shoppable',
    href: 'shop.html?cat=scarf',
    btnText: 'Shop Now'
  }
];

let heroIdx = 0;
let heroTimer = null;

function renderHeroSlider() {
  const slides = document.getElementById('hero-slides');
  const dots = document.getElementById('hero-dots');
  if (!slides) return;

  slides.innerHTML = heroSlideData.map((s, i) => `
    <a class="hero-slide" href="${s.href}">
      <img src="${s.img}" alt="${s.title}" class="hero-slide-img" />
      <div class="hero-slide-overlay"></div>
      <div class="hero-slide-content">
        <span class="hero-slide-tag">${s.tag}</span>
        <h2 class="hero-slide-title">${s.title}</h2>
        <p class="hero-slide-sub">${s.sub}</p>
        <span class="hero-slide-btn">${s.btnText} &rarr;</span>
      </div>
    </a>`).join('');

  if (dots) {
    dots.innerHTML = heroSlideData.map((_, i) =>
      `<button class="hero-dot${i === 0 ? ' active' : ''}" onclick="goToHeroSlide(${i})" aria-label="Slide ${i + 1}"></button>`
    ).join('');
  }
}

function goToHeroSlide(index) {
  heroIdx = index;
  const slides = document.getElementById('hero-slides');
  if (slides) slides.style.transform = `translateX(-${index * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function heroSlide(dir) {
  goToHeroSlide((heroIdx + dir + heroSlideData.length) % heroSlideData.length);
  resetHeroTimer();
}

function resetHeroTimer() {
  clearTimeout(heroTimer);
  heroTimer = setInterval(() => heroSlide(1), 5000);
}

function startHeroSlider() {
  renderHeroSlider();
  resetHeroTimer();
  // Pause auto-advance on hover
  const slider = document.getElementById('hero-slider');
  if (slider) {
    slider.addEventListener('mouseenter', () => clearInterval(heroTimer));
    slider.addEventListener('mouseleave', resetHeroTimer);
  }
}

function setupBrandStrip() {
  const strip = document.getElementById('brand-strip');
  const prev = document.getElementById('brand-prev');
  const next = document.getElementById('brand-next');
  if (!strip) return;
  const scrollAmount = () => strip.clientWidth * 0.7;
  if (prev) prev.addEventListener('click', () => strip.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => strip.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
}

// ─── Promo Banner ────────────────────────────────────────────────────────────
const promoPresets = {
  shipping: { icon: '\u{1F69A}', main: 'FREE SHIPPING', sub: 'on orders above Rp300.000' },
  discount: { icon: '\u{1F3F7}', main: '20% OFF', sub: 'Use code GLIMSY20 at checkout' }
};
let currentPromoType = 'shipping';

function openPromoEdit() {
  const editor = document.getElementById('promo-editor');
  if (!editor) return;
  document.getElementById('promo-main-val').value = document.getElementById('promo-text').textContent;
  document.getElementById('promo-sub-val').value = document.getElementById('promo-sub').textContent;
  editor.classList.add('open');
}

function closePromoEdit() {
  const editor = document.getElementById('promo-editor');
  if (editor) editor.classList.remove('open');
}

function setPromoType(type) {
  currentPromoType = type;
  document.querySelectorAll('.promo-type-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById('type-' + type);
  if (activeBtn) activeBtn.classList.add('active');
  const preset = promoPresets[type];
  document.getElementById('promo-main-val').value = preset.main;
  document.getElementById('promo-sub-val').value = preset.sub;
  document.getElementById('promo-icon').textContent = preset.icon;
}

function savePromo() {
  const mainVal = document.getElementById('promo-main-val').value.trim();
  const subVal = document.getElementById('promo-sub-val').value.trim();
  const preset = promoPresets[currentPromoType];
  document.getElementById('promo-text').textContent = mainVal || preset.main;
  document.getElementById('promo-sub').textContent = subVal || preset.sub;
  document.getElementById('promo-icon').textContent = preset.icon;
  closePromoEdit();
}

document.addEventListener("DOMContentLoaded", () => {
  setupThankYouPage();
  setupButtons();
  renderProductPage();
  renderCartPage();
  renderCheckoutSummary();
  setupCheckoutForm();
  updateCartCount();

  if (document.body.dataset.page === "influencer") {
    renderInstagramGrid();
    setupLookTabs();
    startHeroSlider();
    setupBrandStrip();
    renderInfluencerProducts();
  }

  renderShopPage();
  renderInfluencersPage();
  setupSignupBar();
});
