/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { Link, useLocation } from 'react-router-dom';

import { menuItems } from './data';

const Nav = () => {
	const location = useLocation();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar className="bg-white" maxWidth="full" isBordered isMenuOpen={isMenuOpen}>
			<NavbarContent className="md:hidden pr-3" justify="center">
				<NavbarBrand className="space-x-4">
					<p className="font-medium text-sm text-primary">Youtube</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden md:flex" justify="center">
				<NavbarBrand className="space-x-4">
					<p className="font-medium text-sm text-primary">Youtube</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent>
				<NavbarContent justify="end" className="space-x-5">
					<div className="hidden lg:flex space-x-12 items-center">
						{menuItems.map((item, index) => (
							<NavbarItem key={index}>
								<Link
									color="foreground"
									to={item.path}
									className={`${
										location.pathname === item.path ? 'text-secondary underline underline-offset-4' : 'text-primary'
									} font-medium text-base`}
								>
									{item.name}
								</Link>
							</NavbarItem>
						))}
						<div className="space-x-4 flex">
							<NavbarItem>
								<Link color="primary" to={'/login'}>
									<Button color="primary">Login</Button>
								</Link>
							</NavbarItem>
							<NavbarItem>
								<Link color="primary" to={'/signin'}>
									<Button color="primary" variant="bordered">
										Sign In
									</Button>
								</Link>
							</NavbarItem>
						</div>
					</div>
				</NavbarContent>
			</NavbarContent>

			<NavbarMenu className="w-full space-y-14 pt-10">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={index}>
						<Link
							className="w-full flex justify-center text-base"
							color="foreground"
							to={item.path}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default Nav;
