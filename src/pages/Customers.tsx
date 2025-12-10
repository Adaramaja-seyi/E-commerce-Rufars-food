"use client";

import { useState } from "react";
import {
  Search,
  Download,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Users,
  Calendar,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  address: string;
  city: string;
  country: string;
  orders: number;
  totalSpent: number;
  status: "active" | "inactive";
  joinDate: string;
}

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  amount: number;
  status: "delivered" | "shipped" | "processing";
  items: number;
}

const mockOrders: { [key: number]: Order[] } = {
  1: [
    {
      id: "1",
      orderNumber: "ORD-001",
      date: "2024-11-20",
      amount: 150.5,
      status: "delivered",
      items: 3,
    },
    {
      id: "2",
      orderNumber: "ORD-002",
      date: "2024-11-15",
      amount: 200.0,
      status: "delivered",
      items: 2,
    },
    {
      id: "3",
      orderNumber: "ORD-003",
      date: "2024-11-10",
      amount: 125.8,
      status: "shipped",
      items: 4,
    },
  ],
  2: [
    {
      id: "4",
      orderNumber: "ORD-004",
      date: "2024-11-18",
      amount: 180.3,
      status: "delivered",
      items: 2,
    },
    {
      id: "5",
      orderNumber: "ORD-005",
      date: "2024-11-12",
      amount: 220.5,
      status: "processing",
      items: 3,
    },
  ],
  3: [
    {
      id: "6",
      orderNumber: "ORD-006",
      date: "2024-11-19",
      amount: 95.4,
      status: "delivered",
      items: 1,
    },
  ],
  4: [
    {
      id: "7",
      orderNumber: "ORD-007",
      date: "2024-11-17",
      amount: 155.2,
      status: "shipped",
      items: 2,
    },
  ],
  5: [
    {
      id: "8",
      orderNumber: "ORD-008",
      date: "2024-11-21",
      amount: 310.5,
      status: "delivered",
      items: 5,
    },
    {
      id: "9",
      orderNumber: "ORD-009",
      date: "2024-11-16",
      amount: 180.2,
      status: "delivered",
      items: 2,
    },
  ],
  6: [
    {
      id: "10",
      orderNumber: "ORD-010",
      date: "2024-11-14",
      amount: 89.6,
      status: "delivered",
      items: 1,
    },
  ],
};

const customers: Customer[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 234-567-8901",
    location: "New York, USA",
    address: "123 Main St",
    city: "New York",
    country: "USA",
    orders: 24,
    totalSpent: 1234.5,
    status: "active",
    joinDate: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 234-567-8902",
    location: "Los Angeles, USA",
    address: "456 Oak Ave",
    city: "Los Angeles",
    country: "USA",
    orders: 18,
    totalSpent: 892.0,
    status: "active",
    joinDate: "Feb 3, 2024",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    phone: "+1 234-567-8903",
    location: "Chicago, USA",
    address: "789 Pine Rd",
    city: "Chicago",
    country: "USA",
    orders: 31,
    totalSpent: 2156.75,
    status: "active",
    joinDate: "Dec 20, 2023",
  },
  {
    id: 4,
    name: "James Martinez",
    email: "james.m@email.com",
    phone: "+1 234-567-8904",
    location: "Houston, USA",
    address: "321 Elm St",
    city: "Houston",
    country: "USA",
    orders: 12,
    totalSpent: 645.2,
    status: "active",
    joinDate: "Mar 8, 2024",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    email: "lisa.a@email.com",
    phone: "+1 234-567-8905",
    location: "Phoenix, USA",
    address: "654 Maple Dr",
    city: "Phoenix",
    country: "USA",
    orders: 5,
    totalSpent: 289.99,
    status: "inactive",
    joinDate: "Apr 12, 2024",
  },
  {
    id: 6,
    name: "David Brown",
    email: "david.b@email.com",
    phone: "+1 234-567-8906",
    location: "Philadelphia, USA",
    address: "987 Cedar Ln",
    city: "Philadelphia",
    country: "USA",
    orders: 27,
    totalSpent: 1678.45,
    status: "active",
    joinDate: "Nov 5, 2023",
  },
];

export default function Customers() {
  const [customersList, setCustomersList] = useState(customers);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);
  const [viewOrdersOpen, setViewOrdersOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<Customer | null>(null);

  const filteredCustomers = customersList.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (customer: Customer) => {
    setSelectedCustomer(customer);
    setEditFormData(customer);
    setViewDetailsOpen(true);
  };

  const handleViewOrders = (customer: Customer) => {
    setSelectedCustomer(customer);
    setViewOrdersOpen(true);
  };

  const handleEditClick = (customer: Customer) => {
    setSelectedCustomer(customer);
    setEditFormData({ ...customer });
    setEditModalOpen(true);
  };

  const handleDeleteClick = (customer: Customer) => {
    setSelectedCustomer(customer);
    setDeleteModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (editFormData && selectedCustomer) {
      setCustomersList(
        customersList.map((c) =>
          c.id === selectedCustomer.id ? editFormData : c
        )
      );
      setEditModalOpen(false);
      setEditFormData(null);
    }
  };

  const handleConfirmDelete = () => {
    if (selectedCustomer) {
      setCustomersList(
        customersList.filter((c) => c.id !== selectedCustomer.id)
      );
      setDeleteModalOpen(false);
      setSelectedCustomer(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">Customer Management</h1>
          <p className="text-gray-600">View and manage your customer base</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="gap-2 bg-orange-500 hover:bg-orange-600">
            Add Customer
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Total Customers</span>
            <Users className="w-5 h-5 text-orange-500" />
          </div>
          <div className="text-gray-900">1,248</div>
          <div className="text-green-600 mt-2">↑ 12% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Active Customers</span>
            <Users className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-gray-900">1,089</div>
          <div className="text-green-600 mt-2">↑ 8% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">New This Month</span>
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-gray-900">142</div>
          <div className="text-green-600 mt-2">↑ 23% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Avg. Order Value</span>
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-gray-900">$87.50</div>
          <div className="text-green-600 mt-2">↑ 5% from last month</div>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search customers..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-orange-100 text-orange-600">
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-gray-900">{customer.name}</div>
                      <div className="text-gray-500">{customer.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-3 h-3" />
                      <span className="text-gray-900">{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-3 h-3" />
                      <span className="text-gray-900">{customer.phone}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">{customer.location}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-gray-900">{customer.orders}</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-900">
                    ${customer.totalSpent.toFixed(2)}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      customer.status === "active"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-gray-600">{customer.joinDate}</span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onSelect={() => handleViewDetails(customer)}
                      >
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => handleEditClick(customer)}
                      >
                        Edit Customer
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => handleViewOrders(customer)}
                      >
                        View Orders
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onSelect={() => handleDeleteClick(customer)}
                      >
                        Delete Customer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* View Details Modal */}
      <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Customer Details</DialogTitle>
            <DialogDescription>
              Complete information about {selectedCustomer?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedCustomer && (
            <div className="space-y-6">
              {/* Customer Avatar and Basic Info */}
              <div className="flex items-start gap-6 pb-4 border-b">
                <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl text-orange-600">
                    {selectedCustomer.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedCustomer.name}
                  </h3>
                  <div className="flex gap-4 flex-wrap">
                    <Badge
                      className={
                        selectedCustomer.status === "active"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                      }
                    >
                      {selectedCustomer.status}
                    </Badge>
                    <span className="text-sm text-gray-600">
                      ID: {selectedCustomer.id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Mail className="w-4 h-4 text-orange-500" />
                    {selectedCustomer.email}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Phone className="w-4 h-4 text-orange-500" />
                    {selectedCustomer.phone}
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Address</p>
                  <div className="flex items-start gap-2 text-gray-900">
                    <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p>{selectedCustomer.address}</p>
                      <p>
                        {selectedCustomer.city}, {selectedCustomer.country}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Join Date</p>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    {selectedCustomer.joinDate}
                  </div>
                </div>
              </div>

              {/* Order Statistics */}
              <div className="grid md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {selectedCustomer.orders}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Spent</p>
                  <p className="text-2xl font-bold text-orange-600">
                    ${selectedCustomer.totalSpent.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg. Order Value</p>
                  <p className="text-2xl font-bold text-gray-900">
                    $
                    {(
                      selectedCustomer.totalSpent / selectedCustomer.orders
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setViewDetailsOpen(false)}>
              Close
            </Button>
            {selectedCustomer && (
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                  setViewDetailsOpen(false);
                  handleEditClick(selectedCustomer);
                }}
              >
                Edit Customer
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Orders Modal */}
      <Dialog open={viewOrdersOpen} onOpenChange={setViewOrdersOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Customer Orders</DialogTitle>
            <DialogDescription>
              All orders placed by {selectedCustomer?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedCustomer && (
            <div className="space-y-4">
              {mockOrders[selectedCustomer.id] &&
              mockOrders[selectedCustomer.id].length > 0 ? (
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">
                          Order Number
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">
                          Date
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">
                          Items
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">
                          Amount
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders[selectedCustomer.id].map((order) => (
                        <tr
                          key={order.id}
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="px-4 py-3 text-gray-900 font-medium">
                            {order.orderNumber}
                          </td>
                          <td className="px-4 py-3 text-gray-600">
                            {new Date(order.date).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-3 text-gray-600">
                            {order.items} {order.items === 1 ? "item" : "items"}
                          </td>
                          <td className="px-4 py-3 font-semibold text-gray-900">
                            ${order.amount.toFixed(2)}
                          </td>
                          <td className="px-4 py-3">
                            <Badge
                              className={
                                order.status === "delivered"
                                  ? "bg-green-100 text-green-700 hover:bg-green-100"
                                  : order.status === "shipped"
                                  ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                              }
                            >
                              {order.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-600">
                  <p>No orders found for this customer.</p>
                </div>
              )}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  Total Orders:{" "}
                  <span className="font-bold text-gray-900">
                    {selectedCustomer.orders}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Total Amount:{" "}
                  <span className="font-bold text-orange-600">
                    ${selectedCustomer.totalSpent.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setViewOrdersOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Customer Modal */}
      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Customer</DialogTitle>
            <DialogDescription>
              Update customer information for {selectedCustomer?.name}
            </DialogDescription>
          </DialogHeader>
          {editFormData && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    value={editFormData.name}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, name: e.target.value })
                    }
                    placeholder="Customer name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={editFormData.email}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        email: e.target.value,
                      })
                    }
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <Input
                    value={editFormData.phone}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        phone: e.target.value,
                      })
                    }
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={editFormData.status}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        status: e.target.value as "active" | "inactive",
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <Input
                  value={editFormData.address}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      address: e.target.value,
                    })
                  }
                  placeholder="Street address"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <Input
                    value={editFormData.city}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, city: e.target.value })
                    }
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <Input
                    value={editFormData.country}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        country: e.target.value,
                      })
                    }
                    placeholder="Country"
                  />
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditModalOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-orange-500 hover:bg-orange-600"
              onClick={handleSaveEdit}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <span className="text-xl">⚠️</span>
              Delete Customer
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-900">
                {selectedCustomer?.name}
              </span>
              ? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800">
              <strong>Warning:</strong> Deleting this customer will remove all
              associated data and order history.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={handleConfirmDelete}
            >
              Delete Customer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
