import React, { useState } from 'react';
import { Home, Users, Building, User, Settings, ChevronRight, DollarSign } from 'lucide-react';

const Website = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const clients = [
    { name: 'TechCorp Industries', industry: 'Technology', since: '2019', revenue: 285000 },
    { name: 'Global Finance Group', industry: 'Financial Services', since: '2020', revenue: 450000 },
    { name: 'HealthCare Plus', industry: 'Healthcare', since: '2018', revenue: 320000 },
    { name: 'EduLearn Systems', industry: 'Education', since: '2021', revenue: 180000 },
    { name: 'RetailMax Solutions', industry: 'Retail & E-commerce', since: '2019', revenue: 390000 },
    { name: 'GreenEnergy Co.', industry: 'Renewable Energy', since: '2022', revenue: 275000 }
  ];

  const expenses = [
    { name: 'Office Rent', amount: 60000, type: 'overhead', allocation: 'proportional' },
    { name: 'Software Licenses', amount: 45000, type: 'overhead', allocation: 'proportional' },
    { name: 'Cloud Infrastructure', amount: 35000, type: 'overhead', allocation: 'proportional' },
    { name: 'Insurance', amount: 25000, type: 'overhead', allocation: 'proportional' },
    { name: 'Legal & Professional', amount: 20000, type: 'overhead', allocation: 'proportional' },
    { name: 'Marketing Budget', amount: 40000, type: 'direct', allocation: 'RetailMax Solutions' },
    { name: 'R&D Equipment', amount: 30000, type: 'direct', allocation: 'TechCorp Industries' },
    { name: 'Healthcare Compliance', amount: 15000, type: 'direct', allocation: 'HealthCare Plus' }
  ];

  const [employees, setEmployees] = useState([
    { name: 'Sarah Johnson', role: 'Chief Executive Officer', initials: 'SJ', team: 'Leadership', level: 1, salary: 280000, client: 'All Clients', reports_to: null },
    { name: 'Michael Chen', role: 'VP of Engineering', initials: 'MC', team: 'Engineering', level: 2, salary: 200000, client: 'All Clients', reports_to: 'Sarah Johnson' },
    { name: 'Lisa Martinez', role: 'VP of Sales', initials: 'LM', team: 'Sales', level: 2, salary: 195000, client: 'All Clients', reports_to: 'Sarah Johnson' },
    { name: 'Amanda Foster', role: 'VP of Marketing', initials: 'AF', team: 'Marketing', level: 2, salary: 185000, client: 'All Clients', reports_to: 'Sarah Johnson' },
    { name: 'David Rodriguez', role: 'VP of Operations', initials: 'DR', team: 'Operations', level: 2, salary: 190000, client: 'All Clients', reports_to: 'Sarah Johnson' },
    { name: 'Alex Thompson', role: 'Director of Software Engineering', initials: 'AT', team: 'Engineering', level: 3, salary: 165000, client: 'TechCorp Industries', reports_to: 'Michael Chen' },
    { name: 'Emma Wilson', role: 'Director of Product Engineering', initials: 'EW', team: 'Engineering', level: 3, salary: 160000, client: 'HealthCare Plus', reports_to: 'Michael Chen' },
    { name: 'Ryan Davis', role: 'Director of Enterprise Sales', initials: 'RD', team: 'Sales', level: 3, salary: 155000, client: 'Global Finance Group', reports_to: 'Lisa Martinez' },
    { name: 'Jennifer Lee', role: 'Director of Channel Sales', initials: 'JL', team: 'Sales', level: 3, salary: 150000, client: 'RetailMax Solutions', reports_to: 'Lisa Martinez' },
    { name: 'Mark Kim', role: 'Director of Digital Marketing', initials: 'MK', team: 'Marketing', level: 3, salary: 145000, client: 'TechCorp Industries', reports_to: 'Amanda Foster' },
    { name: 'Rachel Green', role: 'Senior Engineering Manager', initials: 'RG', team: 'Engineering', level: 4, salary: 135000, client: 'TechCorp Industries', reports_to: 'Alex Thompson' },
    { name: 'Tom Wilson', role: 'Senior Product Manager', initials: 'TW', team: 'Engineering', level: 4, salary: 132000, client: 'HealthCare Plus', reports_to: 'Emma Wilson' },
    { name: 'Kevin Brown', role: 'Senior Sales Manager', initials: 'KB', team: 'Sales', level: 4, salary: 125000, client: 'Global Finance Group', reports_to: 'Ryan Davis' },
    { name: 'Amy Johnson', role: 'Senior Account Manager', initials: 'AJ', team: 'Sales', level: 4, salary: 122000, client: 'RetailMax Solutions', reports_to: 'Jennifer Lee' },
    { name: 'Laura White', role: 'Senior Marketing Manager', initials: 'LW', team: 'Marketing', level: 4, salary: 115000, client: 'TechCorp Industries', reports_to: 'Mark Kim' },
    { name: 'Steve Anderson', role: 'Engineering Manager', initials: 'SA', team: 'Engineering', level: 5, salary: 105000, client: 'TechCorp Industries', reports_to: 'Rachel Green' },
    { name: 'Lisa Park', role: 'Product Manager', initials: 'LP', team: 'Engineering', level: 5, salary: 102000, client: 'HealthCare Plus', reports_to: 'Tom Wilson' },
    { name: 'Robert Lee', role: 'Sales Manager', initials: 'RL', team: 'Sales', level: 5, salary: 95000, client: 'Global Finance Group', reports_to: 'Kevin Brown' },
    { name: 'Michelle Turner', role: 'Account Manager', initials: 'MT', team: 'Sales', level: 5, salary: 92000, client: 'RetailMax Solutions', reports_to: 'Amy Johnson' },
    { name: 'Andrew Scott', role: 'Marketing Manager', initials: 'AS', team: 'Marketing', level: 5, salary: 85000, client: 'TechCorp Industries', reports_to: 'Laura White' },
    { name: 'John Smith', role: 'Senior Software Engineer', initials: 'JS', team: 'Engineering', level: 6, salary: 95000, client: 'TechCorp Industries', reports_to: 'Steve Anderson' },
    { name: 'Emily Davis', role: 'Software Engineer', initials: 'ED', team: 'Engineering', level: 6, salary: 85000, client: 'TechCorp Industries', reports_to: 'Steve Anderson' },
    { name: 'Michael Brown', role: 'Frontend Developer', initials: 'MB', team: 'Engineering', level: 6, salary: 78000, client: 'HealthCare Plus', reports_to: 'Lisa Park' },
    { name: 'Anna Johnson', role: 'Backend Developer', initials: 'AJ2', team: 'Engineering', level: 6, salary: 82000, client: 'HealthCare Plus', reports_to: 'Lisa Park' },
    { name: 'David Wilson', role: 'Full Stack Developer', initials: 'DW', team: 'Engineering', level: 6, salary: 80000, client: 'EduLearn Systems', reports_to: 'Lisa Park' },
    { name: 'Amanda Lewis', role: 'Sales Associate', initials: 'AL', team: 'Sales', level: 6, salary: 65000, client: 'Global Finance Group', reports_to: 'Robert Lee' },
    { name: 'Brandon Martinez', role: 'Sales Representative', initials: 'BM', team: 'Sales', level: 6, salary: 62000, client: 'Global Finance Group', reports_to: 'Robert Lee' },
    { name: 'Melissa Garcia', role: 'Account Executive', initials: 'MG', team: 'Sales', level: 6, salary: 70000, client: 'RetailMax Solutions', reports_to: 'Michelle Turner' },
    { name: 'Christopher Lee', role: 'Sales Representative', initials: 'CL', team: 'Sales', level: 6, salary: 68000, client: 'RetailMax Solutions', reports_to: 'Michelle Turner' },
    { name: 'Rachel Davis', role: 'Marketing Specialist', initials: 'RD2', team: 'Marketing', level: 6, salary: 55000, client: 'TechCorp Industries', reports_to: 'Andrew Scott' },
    { name: 'Kevin White', role: 'Digital Marketing Analyst', initials: 'KW', team: 'Marketing', level: 6, salary: 58000, client: 'TechCorp Industries', reports_to: 'Andrew Scott' },
    { name: 'Lisa Thompson', role: 'Content Specialist', initials: 'LT', team: 'Marketing', level: 6, salary: 52000, client: 'EduLearn Systems', reports_to: 'Andrew Scott' },
    { name: 'Eric Johnson', role: 'Operations Analyst', initials: 'EJ', team: 'Operations', level: 6, salary: 58000, client: 'GreenEnergy Co.', reports_to: 'David Rodriguez' },
    { name: 'Diana Martinez', role: 'Process Specialist', initials: 'DM', team: 'Operations', level: 6, salary: 55000, client: 'GreenEnergy Co.', reports_to: 'David Rodriguez' }
  ]);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'clients', label: 'Clients', icon: Building },
    { id: 'people', label: 'People', icon: User },
    { id: 'expenses', label: 'Expenses', icon: DollarSign },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const totalRevenue = clients.reduce((sum, client) => sum + client.revenue, 0);
  const totalSalaries = employees.reduce((sum, emp) => sum + emp.salary, 0);
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const totalCosts = totalSalaries + totalExpenses;
  const totalProfit = totalRevenue - totalCosts;

  const formatMoney = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handleEmployeeDoubleClick = (employee) => {
    setSelectedEmployee(employee);
    setActiveSection('people');
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(prevEmployees => 
      prevEmployees.map(emp => 
        emp.name === selectedEmployee.name ? updatedEmployee : emp
      )
    );
    setEditingEmployee(null);
  };

  const getEmployeeFinancials = (employee) => {
    let allocatedRevenue = 0;
    let allocatedExpenses = 0;
    
    if (employee.client === 'All Clients') {
      allocatedRevenue = totalRevenue * 0.1;
    } else {
      const client = clients.find(c => c.name === employee.client);
      const employeesOnClient = employees.filter(emp => emp.client === employee.client).length;
      if (client && employeesOnClient > 0) {
        allocatedRevenue = client.revenue / employeesOnClient;
      }
    }
    
    const revenuePercentage = totalRevenue > 0 ? allocatedRevenue / totalRevenue : 0;
    const overheadExpenses = expenses.filter(exp => exp.allocation === 'proportional').reduce((sum, exp) => sum + exp.amount, 0);
    const directExpenses = expenses.filter(exp => exp.allocation === employee.client).reduce((sum, exp) => sum + exp.amount, 0);
    const ceoSalary = employees.find(emp => emp.role === 'Chief Executive Officer')?.salary || 0;
    const ceoAllocation = employee.role === 'Chief Executive Officer' ? 0 : revenuePercentage * ceoSalary;
    
    allocatedExpenses = (overheadExpenses * revenuePercentage) + 
                       (directExpenses / (employees.filter(emp => emp.client === employee.client).length || 1)) +
                       ceoAllocation;
    
    const employeeCosts = employee.salary + allocatedExpenses;
    const employeeProfit = allocatedRevenue - employeeCosts;
    
    return {
      revenue: allocatedRevenue,
      expenses: allocatedExpenses,
      salary: employee.salary,
      totalCosts: employeeCosts,
      profit: employeeProfit
    };
  };

  const renderTeams = () => {
    const getEmployeesByLevel = (level) => {
      return employees.filter(emp => emp.level === level);
    };

    const renderEmployee = (employee, size = 'medium') => {
      const financials = getEmployeeFinancials(employee);
      const teamColors = {
        'Leadership': '#8b5cf6',
        'Engineering': '#f59e0b',
        'Sales': '#10b981',
        'Marketing': '#ec4899',
        'Operations': '#6366f1'
      };

      const sizes = {
        large: { width: '180px', height: '120px', avatar: '60px', fontSize: '0.9rem' },
        medium: { width: '140px', height: '100px', avatar: '45px', fontSize: '0.8rem' },
        small: { width: '120px', height: '85px', avatar: '35px', fontSize: '0.7rem' }
      };

      const currentSize = sizes[size];

      return (
        <div
          key={employee.name}
          onDoubleClick={() => handleEmployeeDoubleClick(employee)}
          style={{
            background: 'white',
            width: currentSize.width,
            height: currentSize.height,
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: `2px solid ${teamColors[employee.team]}`,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            position: 'relative',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <div style={{
            width: currentSize.avatar,
            height: currentSize.avatar,
            background: teamColors[employee.team],
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: currentSize.fontSize,
            fontWeight: 'bold',
            marginBottom: '6px'
          }}>
            {employee.initials}
          </div>
          <h5 style={{
            margin: '0 0 2px 0',
            fontSize: currentSize.fontSize,
            fontWeight: 'bold',
            color: '#1f2937',
            textAlign: 'center',
            lineHeight: '1.2'
          }}>
            {employee.name}
          </h5>
          <p style={{
            margin: '0 0 4px 0',
            color: '#6b7280',
            fontSize: size === 'small' ? '0.6rem' : '0.7rem',
            textAlign: 'center',
            lineHeight: '1.1'
          }}>
            {employee.role}
          </p>
          <div style={{
            background: '#f0fdf4',
            padding: '2px 4px',
            borderRadius: '3px',
            fontSize: '0.6rem'
          }}>
            <span style={{ color: '#15803d', fontWeight: '600' }}>
              {formatMoney(financials.profit)}
            </span>
          </div>
        </div>
      );
    };

    // Build tree structure recursively
    const buildOrgTree = (manager) => {
      const directReports = employees.filter(emp => emp.reports_to === manager.name);
      
      if (directReports.length === 0) {
        return {
          employee: manager,
          children: [],
          width: 160 // base width for leaf nodes
        };
      }

      const childTrees = directReports.map(report => buildOrgTree(report));
      const totalChildWidth = childTrees.reduce((sum, child) => sum + child.width, 0);
      const gaps = (childTrees.length - 1) * 50; // 50px gap between siblings
      const totalWidth = Math.max(160, totalChildWidth + gaps);

      return {
        employee: manager,
        children: childTrees,
        width: totalWidth
      };
    };

    const renderOrgNode = (node, x = 0, y = 0) => {
      const nodeSize = node.employee.level === 1 ? 'large' : node.employee.level === 2 ? 'medium' : 'small';
      const nodeWidth = node.employee.level === 1 ? 180 : node.employee.level === 2 ? 140 : 120;
      const levelHeight = 180;

      const elements = [];

      // Current employee
      elements.push(
        <div key={`emp-${node.employee.name}`} style={{
          position: 'absolute',
          left: `${x - nodeWidth / 2}px`,
          top: `${y}px`,
          zIndex: 10
        }}>
          {renderEmployee(node.employee, nodeSize)}
        </div>
      );

      // Children and connecting lines
      if (node.children.length > 0) {
        // Vertical line down from parent
        elements.push(
          <div key={`vline-${node.employee.name}`} style={{
            position: 'absolute',
            left: `${x - 1}px`,
            top: `${y + 100}px`,
            width: '2px',
            height: '50px',
            background: '#6b7280',
            zIndex: 5
          }}></div>
        );

        // Calculate child positions
        let currentX = x - node.width / 2;
        const childY = y + levelHeight;

        // Horizontal line connecting children (if more than 1)
        if (node.children.length > 1) {
          const firstChildX = currentX + node.children[0].width / 2;
          const lastChildX = currentX + node.children.reduce((sum, child, index) => {
            if (index === node.children.length - 1) return sum + child.width / 2;
            return sum + child.width + 50;
          }, 0);

          elements.push(
            <div key={`hline-${node.employee.name}`} style={{
              position: 'absolute',
              left: `${firstChildX - 1}px`,
              top: `${y + 150}px`,
              width: `${lastChildX - firstChildX + 2}px`,
              height: '2px',
              background: '#6b7280',
              zIndex: 5
            }}></div>
          );
        }

        // Render children
        node.children.forEach((child, index) => {
          const childX = currentX + child.width / 2;
          
          // Vertical line to child
          elements.push(
            <div key={`childline-${child.employee.name}`} style={{
              position: 'absolute',
              left: `${childX - 1}px`,
              top: `${y + 150}px`,
              width: '2px',
              height: '30px',
              background: '#6b7280',
              zIndex: 5
            }}></div>
          );

          // Recursively render child node
          elements.push(...renderOrgNode(child, childX, childY));

          currentX += child.width + 50;
        });
      }

      return elements;
    };

    const ceo = getEmployeesByLevel(1)[0];
    
    if (!ceo) {
      return <div>No CEO found</div>;
    }

    const orgTree = buildOrgTree(ceo);
    const allElements = renderOrgNode(orgTree, orgTree.width / 2, 50);

    return (
      <div>
        <div style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)', padding: '30px', borderRadius: '12px', color: 'white', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 15px 0' }}>Organization Chart</h2>
          <p style={{ opacity: 0.9, margin: 0 }}>Hierarchical tree structure - Double-click any employee for details</p>
        </div>

        <div style={{ 
          position: 'relative',
          background: '#f8fafc',
          padding: '50px',
          borderRadius: '12px',
          overflow: 'auto',
          minHeight: '1000px',
          width: '100%'
        }}>
          {allElements}
        </div>

        {/* Legend */}
        <div style={{ 
          marginTop: '30px',
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ margin: '0 0 15px 0', color: '#1f2937' }}>Department Legend</h4>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { name: 'Leadership', color: '#8b5cf6' },
              { name: 'Engineering', color: '#f59e0b' },
              { name: 'Sales', color: '#10b981' },
              { name: 'Marketing', color: '#ec4899' },
              { name: 'Operations', color: '#6366f1' }
            ].map(dept => (
              <div key={dept.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  background: dept.color,
                  borderRadius: '3px'
                }}></div>
                <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>{dept.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderHome = () => (
    <div>
      <div style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', padding: '30px', borderRadius: '12px', color: 'white', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 15px 0' }}>Financial Dashboard</h2>
        <p style={{ opacity: 0.9, marginBottom: '20px' }}>Company overview - 34 employees across 6 levels</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Total Revenue</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{formatMoney(totalRevenue)}</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Total Expenses</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{formatMoney(totalCosts)}</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Total Profit</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{formatMoney(totalProfit)}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderClients = () => (
    <div>
      <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', padding: '30px', borderRadius: '12px', color: 'white', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 15px 0' }}>Our Clients</h2>
        <p style={{ opacity: 0.9, margin: 0 }}>Industry leaders we work with</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
        {clients.map((client, index) => (
          <div key={index} style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ 
                width: '50px', height: '50px', 
                background: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'][index % 6],
                borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 'bold', fontSize: '1.5rem', marginRight: '15px'
              }}>
                {client.name.charAt(0)}
              </div>
              <div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', fontWeight: 'bold', color: '#1f2937' }}>{client.name}</h3>
                <p style={{ margin: '0', color: '#6b7280', fontSize: '0.9rem' }}>{client.industry}</p>
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#15803d', fontSize: '0.9rem', fontWeight: '600' }}>Annual Revenue:</span>
                  <span style={{ color: '#15803d', fontWeight: 'bold', fontSize: '1.1rem' }}>{formatMoney(client.revenue)}</span>
                </div>
              </div>
            </div>
            <div style={{ background: '#f9fafb', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>Client since:</span>
              <span style={{ color: '#1f2937', fontWeight: '600' }}>{client.since}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPeople = () => (
    <div>
      <div style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', padding: '30px', borderRadius: '12px', color: 'white', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 15px 0' }}>Our People</h2>
        <p style={{ opacity: 0.9, margin: 0 }}>Meet our talented team - 34 employees across 6 organizational levels</p>
        {selectedEmployee && (
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '8px', marginTop: '15px' }}>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>
              Viewing details for: <strong>{selectedEmployee.name}</strong>
            </p>
          </div>
        )}
      </div>
      
      {['Leadership', 'Engineering', 'Sales', 'Marketing', 'Operations'].map((teamName) => (
        <div key={teamName} style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>{teamName} Team ({employees.filter(emp => emp.team === teamName).length} members)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
            {employees.filter(emp => emp.team === teamName).map((person, index) => {
              const financials = getEmployeeFinancials(person);
              const isEditing = editingEmployee === person.name;
              const isSelected = selectedEmployee && selectedEmployee.name === person.name;

              return (
                <div 
                  key={index} 
                  style={{ 
                    background: isSelected ? '#dbeafe' : 'white', 
                    padding: '15px', 
                    borderRadius: '10px', 
                    boxShadow: isSelected ? '0 4px 15px rgba(59, 130, 246, 0.3)' : '0 3px 10px rgba(0,0,0,0.1)', 
                    textAlign: 'center',
                    border: isSelected ? '2px solid #3b82f6' : '1px solid transparent'
                  }}
                >
                  <div style={{ 
                    width: '60px', height: '60px', 
                    background: person.team === 'Leadership' ? 'linear-gradient(135deg, #8b5cf6, #3b82f6)' :
                                person.team === 'Engineering' ? 'linear-gradient(135deg, #f59e0b, #ef4444)' :
                                person.team === 'Sales' ? 'linear-gradient(135deg, #10b981, #059669)' :
                                person.team === 'Marketing' ? 'linear-gradient(135deg, #ec4899, #be185d)' :
                                'linear-gradient(135deg, #6366f1, #4f46e5)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 auto 10px auto'
                  }}>{person.initials}</div>
                  
                  {isEditing ? (
                    <div style={{ textAlign: 'left' }}>
                      <input 
                        type="text" 
                        defaultValue={person.name}
                        style={{ width: '100%', padding: '5px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        onBlur={(e) => {
                          const updatedEmployee = { ...person, name: e.target.value };
                          updateEmployee(updatedEmployee);
                        }}
                      />
                      <input 
                        type="text" 
                        defaultValue={person.role}
                        style={{ width: '100%', padding: '5px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        onBlur={(e) => {
                          const updatedEmployee = { ...person, role: e.target.value };
                          updateEmployee(updatedEmployee);
                        }}
                      />
                      <input 
                        type="number" 
                        defaultValue={person.salary}
                        style={{ width: '100%', padding: '5px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        onBlur={(e) => {
                          const updatedEmployee = { ...person, salary: parseInt(e.target.value) };
                          updateEmployee(updatedEmployee);
                        }}
                      />
                      <select 
                        defaultValue={person.client}
                        style={{ width: '100%', padding: '5px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        onChange={(e) => {
                          const updatedEmployee = { ...person, client: e.target.value };
                          updateEmployee(updatedEmployee);
                        }}
                      >
                        <option value="All Clients">All Clients</option>
                        {clients.map(client => (
                          <option key={client.name} value={client.name}>{client.name}</option>
                        ))}
                      </select>
                      <button 
                        onClick={() => setEditingEmployee(null)}
                        style={{ background: '#10b981', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h4 style={{ margin: '0 0 3px 0', fontSize: '0.95rem', fontWeight: 'bold', color: '#1f2937' }}>{person.name}</h4>
                      <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '0.8rem' }}>{person.role}</p>
                      <div style={{ 
                        background: person.team === 'Leadership' ? '#dbeafe' :
                                    person.team === 'Engineering' ? '#fef3c7' :
                                    person.team === 'Sales' ? '#d1fae5' : 
                                    person.team === 'Marketing' ? '#fce7f3' : '#e0e7ff',
                        padding: '4px 8px', borderRadius: '12px', marginBottom: '8px' 
                      }}>
                        <span style={{ 
                          color: person.team === 'Leadership' ? '#1d4ed8' :
                                  person.team === 'Engineering' ? '#92400e' :
                                  person.team === 'Sales' ? '#065f46' : 
                                  person.team === 'Marketing' ? '#9d174d' : '#3730a3',
                          fontSize: '0.7rem', fontWeight: '500' 
                        }}>Level {person.level}</span>
                      </div>
                      <div style={{ background: '#f0fdf4', padding: '6px', borderRadius: '6px', marginBottom: '6px' }}>
                        <p style={{ margin: '0', color: '#15803d', fontSize: '0.7rem', fontWeight: '600' }}>Revenue: {formatMoney(financials.revenue)}</p>
                      </div>
                      <div style={{ background: '#fef2f2', padding: '6px', borderRadius: '6px', marginBottom: '6px' }}>
                        <p style={{ margin: '0', color: '#dc2626', fontSize: '0.7rem', fontWeight: '600' }}>Total Costs: {formatMoney(financials.totalCosts)}</p>
                      </div>
                      <div style={{ background: financials.profit >= 0 ? '#f0fdf4' : '#fef2f2', padding: '6px', borderRadius: '6px', marginBottom: '8px' }}>
                        <p style={{ margin: '0', color: financials.profit >= 0 ? '#15803d' : '#dc2626', fontSize: '0.8rem', fontWeight: 'bold' }}>
                          Profit: {formatMoney(financials.profit)}
                        </p>
                      </div>
                      <button 
                        onClick={() => setEditingEmployee(person.name)}
                        style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.7rem' }}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  const renderExpenses = () => (
    <div>
      <div style={{ background: 'linear-gradient(135deg, #6b7280, #374151)', padding: '30px', borderRadius: '12px', color: 'white', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 15px 0' }}>Company Expenses</h2>
        <p style={{ opacity: 0.9, marginBottom: '20px' }}>Detailed breakdown of all company expenses</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Total Salaries</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{formatMoney(totalSalaries)}</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Other Expenses</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{formatMoney(totalExpenses)}</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Total Costs</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{formatMoney(totalCosts)}</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>Overhead Expenses</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {expenses.filter(exp => exp.allocation === 'proportional').map((expense, index) => (
            <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>{expense.name}</h4>
              <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px' }}>
                <p style={{ margin: '0', color: '#15803d', fontSize: '1.1rem', fontWeight: 'bold' }}>{formatMoney(expense.amount)}</p>
              </div>
              <p style={{ margin: '10px 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>
                Allocated across all teams by revenue
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>Direct Client Expenses</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {expenses.filter(exp => exp.allocation !== 'proportional').map((expense, index) => (
            <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>{expense.name}</h4>
              <div style={{ background: '#fef3c7', padding: '12px', borderRadius: '8px', marginBottom: '10px' }}>
                <p style={{ margin: '0', color: '#92400e', fontSize: '1.1rem', fontWeight: 'bold' }}>{formatMoney(expense.amount)}</p>
              </div>
              <div style={{ background: '#eff6ff', padding: '8px', borderRadius: '8px' }}>
                <p style={{ margin: '0', color: '#1d4ed8', fontSize: '0.9rem', fontWeight: '600' }}>
                  Allocated to: {expense.allocation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div>
      <div style={{ background: 'linear-gradient(135deg, #6b7280, #374151)', padding: '30px', borderRadius: '12px', color: 'white', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 15px 0' }}>Settings</h2>
        <p style={{ opacity: 0.9, margin: 0 }}>Manage your preferences</p>
      </div>
      
      <div style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', maxWidth: '400px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '20px', color: '#1f2937' }}>Profile Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#6b7280' }}>Email Notifications</span>
            <div style={{ width: '44px', height: '24px', background: '#3b82f6', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
              <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', right: '2px' }}></div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#6b7280' }}>Dark Mode</span>
            <div style={{ width: '44px', height: '24px', background: '#d1d5db', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
              <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getContent = () => {
    switch(activeSection) {
      case 'home': return renderHome();
      case 'teams': return renderTeams();
      case 'clients': return renderClients();
      case 'people': return renderPeople();
      case 'expenses': return renderExpenses();
      case 'settings': return renderSettings();
      default: return renderHome();
    }
  };

  const getTitle = () => {
    switch(activeSection) {
      case 'home': return 'Welcome Home';
      case 'teams': return 'Organization Chart';
      case 'clients': return 'Our Clients';
      case 'people': return 'Our People';
      case 'expenses': return 'Company Expenses';
      case 'settings': return 'Settings';
      default: return 'Home';
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <div style={{ width: '256px', backgroundColor: 'white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRight: '1px solid #e5e7eb' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>L</div>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Logo</h1>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Company Name</p>
            </div>
          </div>
        </div>

        <nav style={{ padding: '16px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
                      borderRadius: '8px', border: 'none', width: '100%', fontSize: '14px',
                      fontWeight: '500', cursor: 'pointer', textAlign: 'left',
                      backgroundColor: isActive ? '#dbeafe' : 'transparent',
                      color: isActive ? '#1d4ed8' : '#6b7280',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <IconComponent size={20} />
                    <span>{item.label}</span>
                    {isActive && <ChevronRight size={16} style={{ marginLeft: 'auto' }} />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #6366f1)', color: 'white', padding: '32px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 8px 0' }}>{getTitle()}</h1>
          <p style={{ fontSize: '18px', opacity: 0.9, margin: 0 }}>
            {activeSection === 'home' && 'Your central hub for everything important'}
            {activeSection === 'teams' && 'Explore our organizational structure and team hierarchy - Double-click employees for details'}
            {activeSection === 'clients' && 'Meet the amazing companies we work with'}
            {activeSection === 'people' && 'Get to know our talented team members'}
            {activeSection === 'expenses' && 'Detailed breakdown of all company expenses'}
            {activeSection === 'settings' && 'Personalize your experience'}
          </p>
        </div>

        <div style={{ flex: 1, padding: '32px', width: '100%', maxWidth: 'none' }}>
          {getContent()}
        </div>
      </div>
    </div>
  );
};

export default Website;