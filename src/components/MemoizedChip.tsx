import { Chip } from "@mui/material";
import { memo } from "react";

const MemoizedChip: React.FC<{ tag: string; onDelete: () => void }> = memo(
  ({ tag, onDelete }) => (
    <Chip
      label={`#${tag}`}
      onDelete={onDelete}
      deleteIcon={<div style={{ color: "white" }}>×</div>}
      style={{
        marginRight: "4px",
        padding: "4px",
        color: "white",
        backgroundColor: `#003b93`,
      }}
    />
  ),
  (prevProps, nextProps) => prevProps.tag === nextProps.tag
);

export default MemoizedChip;
