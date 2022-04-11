
namespace API.Models; 

public class Column {
    
    public int Id { get; set; }
    [MaxLength(100)]
    public string Title { get; set; }

    public int ProjectId { get; set; }

    public int? Order { get; set; } = 0;
    
    public virtual List<Card>? Cards { get; set; }
}