# Cleengflix

Example video catalog that replicated Netflix like experience.
Built with Cleeng MediaStore SDK.

Built with:
* [MediaStore SDK](https://github.com/Cleeng/mediastore-sdk) - provides the experience for Checkout and My Account  
* [React](https://reactjs.org/) - UI library
* [Tailwind CSS](https://tailwindcss.com/) - for easy styling
* [DaisyUI](https://daisyui.com/) - provides utitiy classes for Tailwind CSS (e.g. for modal windows)

## Getting started

### Prerequisites

* node 20+ + npm
* Tailwind CSS IntelliSense plugin for VSCode

### Installation

* Clone the repository
* Install dependencies
    ```bash
    npm install
    ```
* Start dev server
    ```bash
    npm run start
    ```

## Todos

### Required

**Features**

- [ ] Video player
- [ ] My Account
- [x] Simple Entitlements (checking if customer has any active subscription)

**Look & feel**
- [x] Dedicated logo
- [ ] Update colors to dedicated theme
- [ ] Customize MS SDK to match

**Technical**
- [x] Wrap the overlay into dedicated component

### Nice to have / experiments
- [ ] Search
- [x] Auto deploy to GH pages
