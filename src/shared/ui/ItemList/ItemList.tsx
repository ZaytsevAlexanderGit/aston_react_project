import React, { type ReactNode } from 'react';

type ItemListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor?: (item: T) => string | number;
  container?: React.ElementType;
  extClassName?: string;
};

export const ItemList = <T,>({
  items,
  renderItem,
  keyExtractor,
  container: Container = 'ul',
  extClassName,
}: ItemListProps<T>) => {
  return (
    <Container className={extClassName}>
      {items.map((item, index) => (
        <React.Fragment key={keyExtractor ? keyExtractor(item) : index}>
          {renderItem(item, index)}
        </React.Fragment>
      ))}
    </Container>
  );
};
