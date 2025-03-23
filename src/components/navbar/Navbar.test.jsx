import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import Navbar from "./NavBar";

describe("Navbar", () => {
  const TestComponent = () => {
    const location = useLocation();
    return (
      <>
        <div data-testid="location-display">{location.pathname}</div>
        <Navbar />
      </>
    );
  };

  it("debería navegar al login cuando se hace clic en el botón de inicio de sesión", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <TestComponent />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Iniciar sesión"));
    expect(screen.getByTestId("location-display")).toHaveTextContent("/login");
  });

  it("debería navegar a inicio cuando se hace clic en el logo", () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <TestComponent />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Inicio"));
    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
  });
});


/*
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Mock del logo
jest.mock('../../assets/logos/artprintLogoDark.png', () => ({
  src: '/logo-mock.png',
  alt: 'ArtPrint link Inicio'
}));

describe('Navbar', () => {
  // Renderiza el componente con MemoryRouter para simular navegación
  const renderNavbar = () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    // Limpia los mocks antes de cada prueba
    jest.clearAllMocks();
  });

  test('muestra el logo y el texto "Inicio"', () => {
    renderNavbar();
    
    // Verifica que el logo esté presente
    const logo = screen.getByAlt('ArtPrint link Inicio');
    expect(logo).toBeInTheDocument();
    
    // Verifica que el texto "Inicio" esté presente
    const inicioText = screen.getByText('Inicio');
    expect(inicioText).toBeInTheDocument();
  });

  test('muestra todas las categorías de navegación', () => {
    renderNavbar();
    
    // Lista de categorías esperadas
    const categorias = ['Cerámica', 'Escritura', 'Acuarela', 'Cocina', 'Fotografía', 'Cosmética'];
    
    // Verifica cada categoría
    categorias.forEach(categoria => {
      const link = screen.getByText(categoria);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/${categoria.toLowerCase()}`);
    });
  });

  test('muestra el botón de inicio de sesión y el ícono del carrito', () => {
    renderNavbar();
    
    // Verifica el botón de inicio de sesión
    const loginButton = screen.getByText('Iniciar sesión');
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveAttribute('href', '/login');
    
    // Verifica el ícono del carrito
    const cartIcon = screen.getByText('🛒');
    expect(cartIcon).toBeInTheDocument();
  });

  test('todos los enlaces son accesibles', () => {
    renderNavbar();
    
    // Obtiene todos los enlaces
    const links = screen.getAllByRole('link');
    
    // Verifica que cada enlace tenga texto descriptivo
    links.forEach(link => {
      expect(link).toHaveAccessibleName();
    });
  });
});
*/