interface Filter {
  children: React.ReactNode;
}

const TaskFilter = ({ children }: Filter) => {
  return <footer className="footer">{children}</footer>;
};

export default TaskFilter;
